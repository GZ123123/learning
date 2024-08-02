import { JsonPipe, NgFor, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { px } from 'libs/helper/convert';
import { BehaviorSubject } from 'rxjs';

export type TableColumn<TEntity extends {}> = {
  key: keyof TEntity;
  label: string | (() => any);
  render?: (row: TEntity) => any;
};

export type TableColumns<TEntity extends {}> = TableColumn<TEntity>[];

class ResizeAbleTable {
  protected _columns: string[] = [];

  private _selectColumn?: number = undefined;
  private _oldColumnSize?: number = undefined;
  private _columnSizeSubject = new BehaviorSubject<number[]>([])

  protected _style = {}

  // { "grid-template-columns": `${this._rowSizes}px auto ${this._rowSizes}px ` }

  protected _isMouseDown = false;
  protected _mouseDownPosition: any = null;

  constructor() {
    this._columnSizeSubject.subscribe((value) => {
      this._style = { 'grid-template-columns': value.map(px).join(' ') }
    })
  }

  protected mount() {
    document.addEventListener('mouseup', this.onMouseUp.bind(this));

    document.addEventListener('mousemove', this.onMouseMove.bind(this));

    this._columnSizeSubject.next(Array(this._columns.length).fill(200));
  }

  onMouseDown(event: MouseEvent, index: number) {
    const end = (event.target as HTMLElement).getBoundingClientRect().right;

    if (event.x > end - 6 && event.x < end) {
      this._selectColumn = index;
    }
  }

  onMouseUp(_event: MouseEvent) {
    this._selectColumn = undefined;

    this._mouseDownPosition = null;

    this._oldColumnSize = undefined;
  }

  onMouseMove(event: MouseEvent) {
    if (this._selectColumn === undefined) return;

    let columnSizes = this._columnSizeSubject.value;

    if (this._mouseDownPosition === null) {
      this._mouseDownPosition = { x: event.x, y: event.y };

      this._oldColumnSize = columnSizes[this._selectColumn];
    }

    const dx = event.x - this._mouseDownPosition.x;

    columnSizes[this._selectColumn] = Math.max(100, (this._oldColumnSize || 0) + dx);

    this._columnSizeSubject.next(columnSizes);
  }

  protected unMount(): void {
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }
}

@Component({
  selector: 'app-table-2',
  imports: [NgFor, NgTemplateOutlet, JsonPipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
})
export class Table2Component<TEntity extends {}>
  extends ResizeAbleTable
  implements OnInit, OnDestroy
{
  @Input()
  data: TEntity[] = [];

  @Optional()
  @Input()
  rowKey = 'id';

  @Input()
  columns!: TableColumns<TEntity>;

  @Output()
  rowDbClick = new EventEmitter<{ index: number; item: TEntity }>();

  protected _headerRenderer: Record<string, () => string> = {};

  protected _cellRenderer: Record<string, (row: TEntity) => string> = {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    (this.columns ?? []).forEach((column) => {
      this._columns.push(column.key as string);

      if (typeof column.label === 'function') {
        this._headerRenderer[column.key as string] = column.label;
      } else {
        this._headerRenderer[column.key as string] = () => column.key as string;
      }

      if (column.render) {
        this._cellRenderer[column.key as string] = column.render;
      } else {
        this._cellRenderer[column.key as string] = (row: TEntity) =>
          (row as any)[column.key as string];
      }
    });

    this.mount();
  }

  onRowDbClick(index: number, item: TEntity) {
    this.rowDbClick.emit({ index, item });
  }

  override onMouseDown(event: MouseEvent, index: number) {
    super.onMouseDown(event, index);
  }

  ngOnDestroy(): void {
    this.unMount();
  }
}

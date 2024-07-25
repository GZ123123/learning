import { NgFor, NgTemplateOutlet } from "@angular/common";
import { Component, computed, EventEmitter, Input, OnInit, Optional, Output } from "@angular/core";

export type TableColumn<TEntity extends {}> = {
  key: keyof TEntity
  label: string | (() => any),
  render?: (row: TEntity) => any
}

export type TableColumns<TEntity extends {}> = TableColumn<TEntity>[]

@Component({
  selector: 'app-table-2',
  imports: [NgFor, NgTemplateOutlet],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true
})
export class Table2Component<TEntity extends {}> implements OnInit {

  @Input()
  data: TEntity[] = []

  @Optional()
  @Input()
  rowKey = 'id'

  @Input()
  columns!: TableColumns<TEntity>

  @Output()
  rowDbClick = new EventEmitter<{ index: number, item: TEntity }>()

  protected _columns: string[] = []

  protected _headerRenderer: Record<string, () => string> = {}

  protected _cellRenderer: Record<string, (row: TEntity) => string> = {}

  private _rowSizes = 200
  private _oldRowSize = this._rowSizes

  protected _style = { "grid-template-columns": `${this._rowSizes}px auto` }

  protected _isMouseDown = false
  protected _mouseDownPosition: any = null

  constructor() {
  }

  ngOnInit(): void {
    (this.columns ?? []).forEach(column => {
      this._columns.push(column.key as string)

      if (typeof column.label === 'function') {
        this._headerRenderer[column.key as string] = column.label
      } else {
        this._headerRenderer[column.key as string] = () => column.key as string
      }

      if (column.render) {
        this._cellRenderer[column.key as string] = column.render
      } else {
        this._cellRenderer[column.key as string] = (row: TEntity) => (row  as any )[column.key as string]
      }
    })

    document.addEventListener('mouseup', (event) => {
      this._isMouseDown = false

      this._mouseDownPosition = null

      this._oldRowSize = this._rowSizes
    })

    document.addEventListener('mousemove', (event) => {
      if (!this._isMouseDown) return

      if(this._mouseDownPosition === null) {
        this._mouseDownPosition = { x: event.x, y: event.y }

        this._oldRowSize = this._rowSizes
      }

      const dx = (event.x - this._mouseDownPosition.x)

      this._rowSizes = this._oldRowSize + dx
      this._style = { "grid-template-columns": `${this._rowSizes}px auto` }
    })
  }

  onRowDbClick(index: number, item: TEntity) {
    this.rowDbClick.emit({ index, item })
  }

  onMouseDown(event: MouseEvent) {
    this._isMouseDown = true
  }
}

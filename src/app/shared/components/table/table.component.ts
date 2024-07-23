import { DOCUMENT, NgFor } from '@angular/common';
import {
  Component,
  Input,
  DoCheck,
  OnChanges,
  SimpleChanges,
  QueryList,
  OnInit,
  effect,
  Inject,
  Injector,
  inject,
  ElementRef,
  ContentChildren,
  InjectionToken,
} from '@angular/core';
import { TableCellComponent } from '../table-cell/table-cell.component';

export const CDK_TABLE = new InjectionToken<any>('CDK_TABLE');

export interface IColumn {
  key: string;
  render: () => string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  providers: [{ provide: CDK_TABLE, useClass: TableComponent }],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<TData extends Record<string, any>>
  implements DoCheck, OnChanges, OnInit
{
  @Input({ required: true }) columns!: IColumn[];

  @Input()
  get data() {
    return this._data ?? [];
  }
  set data(newValue: TData[]) {
    console.log('log - set data: ')
    this._data = newValue;
  }
  private _data?: TData[] = undefined;

  @Input() renderer: { [key in keyof TData]?: any } = {};

  @ContentChildren(TableCellComponent) _cell?: QueryList<TableCellComponent>;

  private _injector = inject(Injector);

  constructor(
    protected readonly _elementRef: ElementRef,
    @Inject(DOCUMENT) _document: any
  ) {
    console.log('log - _elementRef: ', this._elementRef)
    effect(() => {
      console.log('this.data: ', this.data);
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit: ', this._cell);
  }

  ngAfterContentInit() {
    console.log('log - _cell: ', this._cell)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('log - changes: ', changes);
  }

  ngDoCheck() {
    console.log('log - ngDoCheck');
  }

  public _render () {
    console.log('log - render', this._data)
  }
}

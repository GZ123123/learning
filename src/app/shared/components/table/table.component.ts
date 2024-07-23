import { DOCUMENT, NgFor } from '@angular/common';
import {
  Component,
  Input,
  effect,
  Inject,
  ElementRef,
  InjectionToken,
} from '@angular/core';

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
export class TableComponent<TData extends Record<string, any>> {
  @Input({ required: true }) columns!: IColumn[];

  @Input()
  get data() {
    return this._data ?? [];
  }
  set data(newValue: TData[]) {
    this._data = newValue;
  }
  private _data?: TData[] = undefined;

  @Input() renderer: { [key in keyof TData]?: any } = {};

  constructor(
    protected readonly _elementRef: ElementRef,
    @Inject(DOCUMENT) _document: any
  ) {
    effect(() => {
      console.log('this.data: ', this.data);
    });
  }
}

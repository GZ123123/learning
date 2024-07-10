import { NgFor } from '@angular/common';
import { Component, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

export interface IColumn {
  key: string,
  render: () => string,
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<TData extends Record<string, any>> implements DoCheck, OnChanges {
  @Input({ required: true }) columns!: IColumn[]
  @Input() data?: TData[] = undefined
  @Input() renderer: { [key in keyof TData]?: any } = {}

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('log - changes: ', changes)
  }

  ngDoCheck() {
    console.log('log - ngDoCheck')
  }
}

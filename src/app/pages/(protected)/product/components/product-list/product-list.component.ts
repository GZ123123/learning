import { Component } from '@angular/core';
import { IColumn } from 'shared/components/table/table.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  columns: IColumn[] = [{
    key: 'id',
    render: () => 'id'
  },{
    key: 'title',
    render: () => 'title'
  },{
    key: 'amount',
    render: () => 'amount'
  },{
    key: 'action',
    render: () => 'action'
  }]

  data: any[] = [
    {
      id: 1,
      title: 'title 1',
      amount: 'amount 1',
      action: 'action 1'
    },
    {
      id: 2,
      title: 'title 2',
      amount: 'amount 2',
      action: 'action 2'
    },
    {
      id: 3,
      title: 'title 3',
      amount: 'amount 3',
      action: 'action 3'
    }
  ]

  dataSource = ELEMENT_DATA;

  onClick() {
    const id = Date.now()
    console.log('log - id: ', id)
    this.data.push({
      id: id,
      title: `title ${id}`,
      amount: `amount ${id}`,
      action: `action ${id}`
    })

    console.log('log - this.data:', this.data)
  }
}

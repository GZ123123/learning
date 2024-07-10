import { Component } from '@angular/core';
import { IColumn } from '../../../../shared/components/table/table.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
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

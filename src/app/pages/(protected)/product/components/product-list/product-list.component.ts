import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { TableColumns } from 'shared/components/table-2/table.component';

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
  dataSource = ELEMENT_DATA;

  columnDefs: TableColumns<PeriodicElement> = [
    {
      key: 'position',
      label: () => `Position`,
      render: (row) => `${row.position}`,
    },
    {
      key: 'name',
      label: () => `Name`,
      render: (row) => `<b >${row.name}</b>`,
    },
    {
      key: 'position',
      label: () => `Position`,
      render: (row) => `<b>${row.position}</b>`,
    },
  ]

  showCount = signal(false);
  count = signal(0);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  constructor(private router: Router) {}

  onRowClick(data: { index: number, item: PeriodicElement }) {
    this.router.navigate(['/products', data.item.position]);
  }

  onClickCount() {
    this.count.update((prev) => prev + 1);
  }

  onClickShow() {
    this.showCount.update((prev) => !prev);
  }
}

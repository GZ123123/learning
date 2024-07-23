import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'

import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatTableModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatTableModule]
})
export class MaterialModule {}

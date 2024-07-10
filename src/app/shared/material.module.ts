import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule]
})
export class MaterialModule {}

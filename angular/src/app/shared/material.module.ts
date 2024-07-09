import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [ MatButtonModule, MatCardModule, MatDialogModule ],
  exports: [ MatButtonModule, MatCardModule, MatDialogModule ]
})
export class MaterialModule { }

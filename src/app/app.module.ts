import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, SharedModule, AppRoutingModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

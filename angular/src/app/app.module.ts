import { environment } from './../environments/environment';
import {
  InjectionToken,
  NgModule,
} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const APP_TITLE = new InjectionToken<string>('appTitle');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: APP_TITLE,
      useValue: environment.TITLE,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

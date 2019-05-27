import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccesstAlertComponent } from './successt-alert/successt-alert.component';

@NgModule({
  declarations: [AppComponent, WarningAlertComponent, SuccesstAlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

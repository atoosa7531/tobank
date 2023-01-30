import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: 'red',
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: NZ_CONFIG, useValue: ngZorroConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReportComponent } from './main/report/report.component';
import { ResultComponent } from './main/result/result.component';
import { IntroComponent } from './main/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ResultComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

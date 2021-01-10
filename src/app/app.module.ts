import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PartRecordComponent } from './part-record/part-record.component';



@NgModule({
  declarations: [
    AppComponent,
    PartRecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfluTableComponent } from './influ-table/influ-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InfluTableComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

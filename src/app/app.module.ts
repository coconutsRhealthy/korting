import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfluTableComponent } from './influ-table/influ-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    InfluTableComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

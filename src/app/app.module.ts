import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { FilterListPipe } from './filter-list.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ConnectorsListComponent } from './connectors-list/connectors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    FilterListPipe,
    ConnectorsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

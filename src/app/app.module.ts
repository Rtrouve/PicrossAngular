import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { DisplayGridComponent } from './display-grid/display-grid.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { LevelComponent } from './level/level.component';
import { ChronoComponent } from './chrono/chrono.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayGridComponent,
    HeaderComponent,
    LevelComponent,
    ChronoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

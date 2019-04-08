import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayGridComponent } from './display-grid/display-grid.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { ChronoComponent } from './chrono/chrono.component';
import { FooterComponent } from './footer/footer.component';
import { DifficultyChoiceComponent } from './difficulty-choice/difficulty-choice.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayGridComponent,
    HeaderComponent,
    ChronoComponent,
    FooterComponent,
    DifficultyChoiceComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

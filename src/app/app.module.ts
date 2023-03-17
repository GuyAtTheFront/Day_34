import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsInfoComponent } from './news-info/news-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFormComponent,
    NewsInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

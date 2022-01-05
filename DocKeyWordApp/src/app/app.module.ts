import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocKeyWordComponent } from './doc-key-word/doc-key-word.component';

import { DocKeyWordService } from './doc-key-word.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchKeyWordsPipe } from './search-key-words.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DocKeyWordComponent,
    SearchKeyWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatRadioModule,  
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [HttpClientModule, DocKeyWordService,FormsModule, SearchKeyWordsPipe],
  bootstrap: [AppComponent, DocKeyWordComponent]
})
export class AppModule { }

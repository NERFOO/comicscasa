import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComicspadreComponent } from './components/comicspadre/comicspadre.component';
import { ComichijoComponent } from './components/comichijo/comichijo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicspadreComponent,
    ComichijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

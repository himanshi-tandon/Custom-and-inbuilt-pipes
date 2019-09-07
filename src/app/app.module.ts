import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SqrtPipe } from './sqrt.pipe';
import { PowPipe } from './pow.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    PowPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

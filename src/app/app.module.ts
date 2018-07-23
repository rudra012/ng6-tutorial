import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BasicStyleComponent } from './basic-style/basic-style.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BasicStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadermenuComponent } from './Shared/Layout/headermenu/headermenu.component';
import { SidemenuComponent } from './Shared/Layout/sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadermenuComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

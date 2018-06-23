import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogincomponentComponent } from './login/logincomponent/logincomponent.component';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', component: LogincomponentComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

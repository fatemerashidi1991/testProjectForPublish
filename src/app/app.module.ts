import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from '../app/app-routing.module';

import { AlertComponent } from '../app/components/alert.component';
//import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from '../app/home/home.component';
 import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
],
providers: [
  // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  // // provider used to create fake backend
  // fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }

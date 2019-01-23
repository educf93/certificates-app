import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { PanelViewComponent } from './panel-view/panel-view.component';
import { ApiconfigViewComponent } from './apiconfig-view/apiconfig-view.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import { NavbarViewComponent } from './navbar-view/navbar-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    PanelViewComponent,
    ApiconfigViewComponent,
    CertificatesViewComponent,
    NavbarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

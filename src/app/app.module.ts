import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { PanelViewComponent } from './panel-view/panel-view.component';
import { ApiconfigViewComponent } from './apiconfig-view/apiconfig-view.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import { NavbarViewComponent } from './navbar-view/navbar-view.component';
import { ApigttService } from './apigtt.service'

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApigttService],
  bootstrap: [AppComponent]
})
export class AppModule { }

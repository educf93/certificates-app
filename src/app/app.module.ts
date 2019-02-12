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
import { ApigttService } from './apigtt.service';
import { NavbarPanelViewComponent } from './navbar-panel-view/navbar-panel-view.component';
import { ChargeCertsViewComponent } from './charge-certs-view/charge-certs-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    PanelViewComponent,
    ApiconfigViewComponent,
    CertificatesViewComponent,
    NavbarViewComponent,
    NavbarPanelViewComponent,
    ChargeCertsViewComponent,
    DetailViewComponent
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

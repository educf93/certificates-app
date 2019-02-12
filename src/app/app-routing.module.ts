import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { PanelViewComponent } from './panel-view/panel-view.component';
import { ChargeCertsViewComponent } from './charge-certs-view/charge-certs-view.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginViewComponent
  },
  {
    path:'register',
    component: RegisterViewComponent
  },
  {
    path:'',
    component: LoginViewComponent
  },
  {
    path:'panel-view',
    component: PanelViewComponent
  },
  {
    path:'charge-certs',
    component: ChargeCertsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

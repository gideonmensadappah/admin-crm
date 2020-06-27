import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ContactComponent} from '../app/comps/contact/contact.component';
import {CustomerComponent} from '../app/comps/customer/customer.component';
import {PageNotFoundComponent} from '../app/comps/page-not-found/page-not-found.component';
import {LoginSystemComponent} from '../app/comps/login-system/login-system.component';
import {NewCustomerComponent} from '../app/comps/new-customer/new-customer.component';


const routes: Routes = [
  {path:'customers', component:CustomerComponent},
  {path:'', redirectTo:'/customers', pathMatch:'full'},
  {path:'contact', component:ContactComponent},
  {path:'crm/login',component:LoginSystemComponent, pathMatch:'full'},
  {path:'new-customer', component:NewCustomerComponent},
  {path:'logIn',component:LoginSystemComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

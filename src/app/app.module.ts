import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment'



import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopNavComponent } from './comps/top-nav/top-nav.component';
import { SideNavComponent } from './comps/side-nav/side-nav.component';
import { CustomerComponent } from './comps/customer/customer.component';
import { ContactComponent } from './comps/contact/contact.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { NewCustomerComponent } from './comps/new-customer/new-customer.component';
import { from } from 'rxjs';
import { LoginSystemComponent } from './comps/login-system/login-system.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    CustomerComponent,
    ContactComponent,
    PageNotFoundComponent,
    NewCustomerComponent,
    LoginSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

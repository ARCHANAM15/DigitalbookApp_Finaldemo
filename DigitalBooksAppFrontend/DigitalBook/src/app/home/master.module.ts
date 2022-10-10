import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Mainroutes } from '../routing/mainroutes';

import { LoginServicesService } from '../services/login-services.service';
import { MasterComponent } from '../master/master.component';
import { HomeComponent } from './home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReaderComponent } from '../reader/reader.component';
import { LoginComponent } from '../login/login.component';
import { AuthorComponent } from '../author/author.component';
import { GridUIModule } from '../utilites/grid-ui/grid-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from '../register/register.component';
import { AllbookComponent } from '../allbook/allbook.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from '../services/tokenInterceptorservice';

@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent,
    ReaderComponent,
    LoginComponent,
    RegisterComponent,
    AuthorComponent,
    AllbookComponent,
    CheckoutComponent
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes),
    HttpClientModule,
    GridUIModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginServicesService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS},{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}, JwtHelperService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }


import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { authorroutes } from '../routing/authorroutes';
import { checkoutroutes } from '../routing/checkoutroutes';

import { GridUiComponent } from '../utilites/grid-ui/grid-ui.component';
import { GridUIModule } from '../utilites/grid-ui/grid-ui.module';
import { CheckoutComponent } from './checkout.component';





@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(checkoutroutes),
    HttpClientModule,
    GridUIModule,
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [CheckoutComponent]
})


export class checkoutModule { }
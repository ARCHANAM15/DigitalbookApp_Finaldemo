


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { registerroutes } from '../routing/registerroutes';






@NgModule({
  declarations: [
    RegisterComponent,
    
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(registerroutes),
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
 ],
  providers: [],
  bootstrap: [RegisterComponent]
})



export class registerModule { }
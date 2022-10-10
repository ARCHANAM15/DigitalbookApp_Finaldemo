import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { authorroutes } from '../routing/authorroutes';
import { BookServicesService } from '../services/book-services.service';
import { TokenInterceptorService } from '../services/tokenInterceptorservice';

import { GridUiComponent } from '../utilites/grid-ui/grid-ui.component';
import { GridUIModule } from '../utilites/grid-ui/grid-ui.module';

import { AuthorComponent } from './author.component';





@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(authorroutes),
    HttpClientModule,
    GridUIModule,
    ReactiveFormsModule
  
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AuthorComponent]
})
export class authorModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReaderComponent } from './reader.component';
import { readerroutes } from '../routing/readerroutes';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridUIModule } from '../utilites/grid-ui/grid-ui.module';






@NgModule({
  declarations: [
    ReaderComponent,
    
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(readerroutes),
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    GridUIModule
 ],
  providers: [],
  bootstrap: [ReaderComponent]
})
export class readerModule { }

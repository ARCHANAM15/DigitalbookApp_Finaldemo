import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GridUiComponent } from './grid-ui.component';
import { CommonModule } from '@angular/common';

import { OrderGridComponent } from '../order-grid/order-grid.component';






@NgModule({
  declarations: [
    GridUiComponent,
    
    OrderGridComponent

  
  ],
  imports: [CommonModule],
  exports:[GridUiComponent,CommonModule,OrderGridComponent]
  
})
export class GridUIModule { }

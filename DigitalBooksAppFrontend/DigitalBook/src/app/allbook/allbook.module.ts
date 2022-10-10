import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { allbookroutes } from '../routing/allbookroutes';
import { authorroutes } from '../routing/authorroutes';

import { GridUiComponent } from '../utilites/grid-ui/grid-ui.component';
import { GridUIModule } from '../utilites/grid-ui/grid-ui.module';
import { AllbookComponent } from './allbook.component';






@NgModule({
  declarations: [
    AllbookComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(allbookroutes),
    HttpClientModule,
    GridUIModule,
  
    
  ],
  providers: [],
  bootstrap: [AllbookComponent]
})
export class allbookModule { }

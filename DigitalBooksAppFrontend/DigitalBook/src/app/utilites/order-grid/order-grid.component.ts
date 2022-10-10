import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {

  constructor() { }
  //getting column names
  gridColumns: Array<any> = new Array<any>();

  //getting column data
  gridData: Array<any> = new Array<any>();


  ngOnInit(): void {
  }

 @Input("grid-columns")
 set SetGridColumns(_gridColumn:Array<any>){
   this.gridColumns=_gridColumn;
 } 
@Input("grid-data")
set SetGridData(_gridData:Array<any>){
  this.gridData=_gridData;
  console.log("grid-data loading",this.gridData);
}
  
@Output("grid-deleted")
emitemitterd:EventEmitter<any>=new EventEmitter<any>();

deletedGrid(_dselected:any){
this.emitemitterd.emit(_dselected);
}
}

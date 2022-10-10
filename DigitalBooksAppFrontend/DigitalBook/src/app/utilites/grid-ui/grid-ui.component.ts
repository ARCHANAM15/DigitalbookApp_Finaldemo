import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-grid-ui',
  templateUrl: './grid-ui.component.html',
  styleUrls: ['./grid-ui.component.css']
})
export class GridUiComponent implements OnInit {
  //public imageURL:any="https://localhost:44375/";


  public imagePath:any
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

  @Output("grid-selected")
  
  emitemitter:EventEmitter<any>=new EventEmitter<any>();
  
  selectedGrid(_selected:any){
    
    this.emitemitter.emit(_selected);
  }
  @Output("grid-deleted")
  emitemitterd:EventEmitter<any>=new EventEmitter<any>();

  deletedGrid(_dselected:any){
 this.emitemitterd.emit(_dselected);
  }
  //book block
  @Output("book-block")
  _blockemitemitter:EventEmitter<any>=new EventEmitter<any>();

  blockGrid(_block:any){
  
    this._blockemitemitter.emit(_block);
  }
  //book-unblock
  @Output("book-unblock")
  _unblockemitemitter:EventEmitter<any>=new EventEmitter<any>();
  unblockGrid(_unblock:any){
    this._unblockemitemitter.emit(_unblock);
  }


  getImage(input:any){
    console.log(input)
      }
}

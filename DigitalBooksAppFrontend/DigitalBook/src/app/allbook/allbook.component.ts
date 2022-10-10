import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/booksmodel';

@Component({
  selector: 'app-allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.css']
})
export class AllbookComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public imagePath:any
  ngOnInit(): void {
    this.showOthersBook();
  }
  allbookModel: Book = new Book();
  allbookModels:Array<Book>= new Array<Book>();

  showOthersBook(){
     
   
    this.http.get("https://localhost:44375/api/Book").subscribe(res=>this.Success(res),res=>console.log(res));
  }
  Success(input:any){
    console.log(input)
   this.allbookModels=input;
  }
}

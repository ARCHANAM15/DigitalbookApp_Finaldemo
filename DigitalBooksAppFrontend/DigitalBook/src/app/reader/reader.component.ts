import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/booksmodel';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  booktitle:string='';
  bookauthor:string='';
  bookpublisher:string='';
  bookreleased:string ='';
  bookcontent:string=""
  bookimage:string=""
   public url:string="https://localhost:44375/api/Reader";
  
   
  constructor(private http: HttpClient) { }
  SearchBookModel: Book=new Book();
  SearchBookModels:Array<Book>= new Array<Book>();

  ngOnInit(): void {
  }
  searchbook(){
    
   if(this.booktitle==""){
     alert("Booktitle is required")
   }
   
    this.booktitle=this.SearchBookModel.title;
    this.bookauthor=this.SearchBookModel.author;
    this.bookcontent=this.SearchBookModel.content;
    this.bookpublisher=this.SearchBookModel.publisher;
    this.bookreleased=this.SearchBookModel.releaseddate;
    this.bookimage=this.SearchBookModel.imageUrl;
    this.http.post(this.url+'?title='+this.booktitle+'& author='+this.bookauthor+'& publisher='
    +this.bookpublisher+'&releasedate='+this.bookreleased+'&content='+this.bookcontent+'&image='+this.bookimage,"")
    .subscribe(res=>this.Success(res),res=>console.log(res))
    this.SearchBookModels = new Array<Book>();
  }

  Success(input: any) {
    console.log(input);
    this.SearchBookModels = input;
  }
  buyABook(book:any){

  }
  
}

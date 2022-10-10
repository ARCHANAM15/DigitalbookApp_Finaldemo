import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../Models/booksmodel';
import { HttpClient } from '@angular/common/http';
import { LoginServicesService } from '../services/login-services.service';
import { BookServicesService } from '../services/book-services.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public authorId:any;
  public selectedFile!: File;
  public authorname:any = "";
  ErrorMessage:any='';
  public updateurl:any="https://localhost:44365/api/Book/bookupdate";
  alert:boolean=false
  alertdelete:boolean=false
  alertblock:boolean=false
  alertunblock:boolean=false
  alertedit:boolean=false
  public cureentuserid=""
  constructor(private http:HttpClient,private _services:BookServicesService,private _router:Router,private jwt: JwtHelperService,private _auth:LoginServicesService) { }
  isEdit=false;
  public authorIdbk:any;

  ngOnInit(): void {
   
    this.cureentuserid=this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
    
  this.showMyBooks(this.cureentuserid);
   }
  BooksModel: Book = new Book();
  BooksModels:Array<Book>= new Array<Book>();

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
  }
  CreateBooks(event:any) {
    
  
    this.BooksModel.author=localStorage.getItem('username');
    var _authorData = {
      title: this.BooksModel.title,
      price: this.BooksModel.price,
      category:  this.BooksModel.category,
      author: this.BooksModel.author,
      active: this.BooksModel.active,
      content: this.BooksModel.content,
      publisher: this.BooksModel.publisher,
      file:this.BooksModel.imageUrl,
      AuthorId:this.cureentuserid

     
    }; 
  
    const BooKDetials = new FormData();
    
    BooKDetials.append('Title', _authorData.title);
    BooKDetials.append('Price', _authorData.price);
    BooKDetials.append('Category', _authorData.category);
    BooKDetials.append('Author', _authorData.author);
    BooKDetials.append('Active', _authorData.active);
    BooKDetials.append('content', _authorData.content);
    BooKDetials.append('Publisher', _authorData.publisher);
    BooKDetials.append('AuthorId',_authorData.AuthorId)
  
    BooKDetials.append('image', this.selectedFile, this.selectedFile.name);
   
    if(this.isEdit){
      
      debugger;
      this.http.put(this.updateurl,BooKDetials).subscribe(res=>this.postsuccess(res),res=>console.log(res))
     this.alertedit=true
      }
      else{
      
     this.http.post("https://localhost:44365/api/Book/createbook",BooKDetials).subscribe(res=>this.postsuccess(res),res=>console.log(res));
     this.alert=true
      }
      this.BooksModel=new Book();
      
      }
  
     

   showOthersBook(){
     
   
    this.http.get("https://localhost:44365/api/Book").subscribe(res=>this.Success(res),res=>console.log(res));
  }
  Success(input:any){
    console.log(input)
   this.BooksModels=input;
  }
  postsuccess(input :any){
    this.showMyBooks(this.cureentuserid);
  }
  EditBook(input:any){
    this.isEdit = true;
    this.BooksModel = input
  }
  DeleteBook(input: any){
    
    this.http.delete("https://localhost:44365/api/Book/deletebook?id=" + input.id).subscribe(res => this.postsuccess(res), res => console.log(res));
    this.alertdelete=true
  }

  BlockBook(input: any){
   
    this.authorIdbk=input.id; 
    this._services.BlockGridService(this.authorIdbk)
    this.alertblock=true
    window.location.reload();
    this.showMyBooks(this.cureentuserid);
   
    
  }
 
   unBlockBook(input :any){
    this.authorIdbk=input.id; 
    this._services.UnBlockGridService(this.authorIdbk)
    this.alertunblock=true
    window.location.reload();
    this.showMyBooks(this.cureentuserid);
 
   }
  //showMyBook(){
   //this.BooksModel.author=localStorage.getItem('username');
   // this._services.getAuthorBooks(this.BooksModel).subscribe(res=>this.Success(res),res=>console.log(res));
     
//}
closealert(){
  this.alert=false
}
 showMyBooks(input :any){
  this.http.get("https://localhost:44365/api/Book/AuthorBooksbyID?Authorid="+input).subscribe(res => this.Success(res), res => console.log(res));
 }
  
    

 
}
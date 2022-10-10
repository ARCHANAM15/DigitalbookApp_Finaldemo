import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Book } from '../Models/booksmodel';
import { loginData } from '../Models/loginData';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'DigitalBook';
  constructor(private http: HttpClient,private _router:Router,private jwt: JwtHelperService,private _auth:LoginServicesService) { }
 // imghome="././assets/image/bk.jfif"
 SearchBookModel: Book=new Book();
SearchBookModels:Array<Book>= new Array<Book>();
user:loginData=new loginData();
 booktitle:string='';
 bookauthor:string='';
 bookpublisher:string='';
 bookreleased:string ='';
 bookcontent:string=""
 bookimage:string=""
 display = "none";
 public name:any;
 public cureentuserid=""
  public url:string="https://localhost:44302/api/Reader/getbooks";
  
  ngOnInit(): void {
   this.showOthersBook();
   this.cureentuserid=this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
  }
  searchbook(){
  
    
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
  ReaderBuyBook(book:any){

  }

  showOthersBook(){
     
   
    this.http.get("https://localhost:44365/api/Book").subscribe(res=>this.Success(res),res=>console.log(res));
  }

  openModal(input:any) {
  
    this.GetAuthorBookDetailById(input);
    this.display = "block";
  }
  GetAuthorBookDetailById(input:any){
    this.http.get("https://localhost:44302/api/Reader/GetAuthorBookByAuthorBookID?authorBookId="+input).subscribe(res => this.PostSuccess(res), res => console.log(res));
  }
  PostSuccess(input: any) {
  
    console.log(input);
    this.SearchBookModel = input;
  }
  closeModel(){
    this.display='none'
  }
  buybook(id:any){
    
   
    console.log("searchbookmodel",this.SearchBookModels);
  
    this.user.userName=localStorage.getItem('username');
    if(this.cureentuserid !=null)
   {

    this._router.navigate(['/checkout',btoa(id)])
   }
  else{
    this._router.navigate(['login'])
  }
  
  }
 
  
  }
  


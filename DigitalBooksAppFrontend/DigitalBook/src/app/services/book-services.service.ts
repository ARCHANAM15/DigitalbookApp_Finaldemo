import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

 // _authorBooks="https://localhost:44365/api/book/AuthorBooks";

  public block:any='https://localhost:44365/api/Book/book-block';
 
    public unblock:any="https://localhost:44365/api/Book/book-unblock";
  constructor(private http:HttpClient,private _router:Router) {

   }

   //getAuthorBooks(_readerModel:any){
    
    //return this.http.get<any>(this._authorBooks+'?author='+_readerModel.author);
  //}
  //BlockGridService(id:any){
    //this.http.put(this.block, id).subscribe(res=>this.Success(res),res=>console.log(res))

  //}
  BlockGridService(id:any){
    this.http.put(this.block, id).subscribe(res=>this.Success(res),res=>console.log(res))

  }
  
  UnBlockGridService(id:any){
    this.http.put(this.unblock, id).subscribe(res=>this.Success(res),res=>console.log(res))
  }
  BlockUnBlock(input:any){
    console.log(input);

  }
  Success(input:any){
    console.log(input)
  
  }
}

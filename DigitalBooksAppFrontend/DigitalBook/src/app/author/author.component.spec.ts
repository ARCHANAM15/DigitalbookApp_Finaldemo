import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { BookServicesService } from '../services/book-services.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthorComponent } from './author.component';
import { Book } from '../Models/booksmodel';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServicesService } from '../services/login-services.service';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async () => {
    let http:HttpClient;
    let router:Router;
    let author:BookServicesService;
    let jwt:JwtHelperService;
    let login:LoginServicesService
    await TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,RouterModule],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService,Router]

     
    })
    .compileComponents();
    http=TestBed.inject(HttpClient);
    router=TestBed.inject(Router);
    author=TestBed.inject(BookServicesService);
    jwt=TestBed.inject(JwtHelperService);
    login=TestBed.inject(LoginServicesService);
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
 
 
 
});

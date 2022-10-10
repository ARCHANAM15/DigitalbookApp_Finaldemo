import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { readerModule } from '../reader/reader.module';
import { LoginServicesService } from '../services/login-services.service';
import { ReaderService } from '../services/reader.service';

import { HomeComponent } from './home.component';

describe('CheckoutComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    let http:HttpClient;
    let router:Router;
    let login:LoginServicesService;
    let reader:ReaderService;
    let jwt:JwtHelperService
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpClientModule,HttpClientTestingModule,RouterModule,readerModule],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
      
    })
    .compileComponents();
    router=TestBed.inject(Router)
    http=TestBed.inject(HttpClient);
    router=TestBed.inject(Router);
    login=TestBed.inject(LoginServicesService);
    reader=TestBed.inject(ReaderService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


 
  
});

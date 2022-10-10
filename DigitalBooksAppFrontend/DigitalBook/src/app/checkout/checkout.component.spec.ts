import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServicesService } from '../services/login-services.service';
import { ReaderService } from '../services/reader.service';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    let login:LoginServicesService;
    let reader:ReaderService;
    let jwt:JwtHelperService;
    let http:HttpClient;
    let router:Router;

    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,RouterModule,ActivatedRoute],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService,Router]
    })
    .compileComponents();
    http=TestBed.inject(HttpClient);
  router=TestBed.inject(Router);
    reader=TestBed.inject(ReaderService);
    jwt=TestBed.inject(JwtHelperService);
    login=TestBed.inject(LoginServicesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { LoginServicesService } from '../services/login-services.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    let login:LoginServicesService;
    let router:Router;
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientTestingModule,,RouterModule,HttpClient],
    })
    .compileComponents();
    router=TestBed.inject(Router)
    login=TestBed.inject(LoginServicesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

});

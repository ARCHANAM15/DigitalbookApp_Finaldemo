import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { loginroutes } from "../routing/loginroutes";
import { LoginComponent } from "./login.component";






@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
      FormsModule,
      RouterModule.forChild(loginroutes),
      HttpClientModule,
      ReactiveFormsModule

    ],
    providers: [],
    bootstrap: [LoginComponent]
})
export class authorModule { }
export class loginModule {

}
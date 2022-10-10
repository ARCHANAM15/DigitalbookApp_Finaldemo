

import { AllbookComponent } from "../allbook/allbook.component"
import { AuthorComponent } from "../author/author.component"
import { CheckoutComponent } from "../checkout/checkout.component"
import { HomeComponent } from "../home/home.component"
import { LoginComponent } from "../login/login.component"
import { ReaderComponent } from "../reader/reader.component"
import { RegisterComponent } from "../register/register.component"

export const Mainroutes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {path:'author', component:AuthorComponent},
    { path: 'reader', component:ReaderComponent},
    {path:'register',component:RegisterComponent},
    {path:'author/allbook',component:AllbookComponent},
    {path:'checkout/:id',component:CheckoutComponent},
    
]
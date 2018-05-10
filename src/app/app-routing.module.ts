import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuard} from "./guards/auth.guard";
import { MyhiresComponent } from './components/myhires/myhires.component';
import { NewhireComponent } from './components/newhire/newhire.component';
import { ItemComponent } from './components/item/item.component';
import { BasketComponent } from './components/basket/basket.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myhires',
    component: MyhiresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newhires',
    component: NewhireComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'items',
    component: ItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'basket',
    component: BasketComponent ,
    canActivate: [AuthGuard]
  },
 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

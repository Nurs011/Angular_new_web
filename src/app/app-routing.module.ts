import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WomenPageComponent} from './women-page/women-page.component';
import {KidsPageComponent} from './kids-page/kids-page.component';
import {MenPageComponent} from './men-page/men-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {AdminGuardGuard} from "./admin-page/admin-guard.guard";
import {LoginPageComponent} from "./login-page/login-page.component";
import {KidsGuardGuard} from "./kids-page/kids-guard.guard";
import {UnsavedGuard} from "./unsaved.guard";



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'women', component: WomenPageComponent},
  {path: 'men', component: MenPageComponent, canDeactivate: [UnsavedGuard]},
  {path: 'kids', component: KidsPageComponent, canActivate: [KidsGuardGuard]},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', component: AdminPageComponent, canActivate: [AdminGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WomenPageComponent} from './women-page/women-page.component';
import {KidsPageComponent} from './kids-page/kids-page.component';
import {MenPageComponent} from './men-page/men-page.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'women', component: WomenPageComponent},
  {path: 'men', component: MenPageComponent},
  {path: 'kids', component: KidsPageComponent},
  {path: 'home', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

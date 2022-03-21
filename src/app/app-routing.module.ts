import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NewheroeComponent } from './core/newheroe/newheroe.component';
import { NavbarHeroesComponent } from './shared/navbar-heroes/navbar-heroes.component';

const routes: Routes = [
  {
    path     : 'home',
    component: HomeComponent
  },
  {
    path     : 'newHeroe',
    component: NewheroeComponent
  },
  {
    path      : '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

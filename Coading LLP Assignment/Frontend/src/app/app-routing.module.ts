import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './blog/main/main.component';
import { NewpostComponent } from './blog/newpost/newpost.component';
import { ViewpostComponent } from './blog/viewpost/viewpost.component';
import { EditpostComponent } from './blog/editpost/editpost.component';

const routes: Routes = [
  {
    path:"",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "newpost",
    component: NewpostComponent
  },
  {
    path: "viewpost",
    component: ViewpostComponent,
    pathMatch: 'full'
  },
  {
    path: "editpost",
    component : EditpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

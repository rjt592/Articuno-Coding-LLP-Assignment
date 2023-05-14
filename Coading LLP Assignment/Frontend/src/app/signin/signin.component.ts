import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../Service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  alert = false;

  signInForm = new FormGroup({
    email : new FormControl("",[Validators.required]),
    password : new FormControl("",[Validators.required,Validators.minLength(8)])
  })

  constructor(private blogservice: BlogService, private router : Router){}


  signIn(){
    if(this.signInForm.valid){
      this.blogservice.signIn(this.signInForm.value).subscribe(res=>{
        localStorage.setItem("token", res.token);
        localStorage.setItem("id", res._id);
        localStorage.setItem("email", res.userName);
        localStorage.setItem("name", res.name);
        localStorage.setItem("mobile", res.mobileNo);
        
  console.log(res.mobileNo)
        localStorage.setItem("isActive", res.isActive);
        this.signInForm.reset();
        this.router.navigate(["main"]);
      },error=>{
        console.log(error);
      });
    }this.alert = true;    
  }

 

}

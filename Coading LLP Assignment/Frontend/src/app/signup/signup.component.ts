import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../Service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private blogService : BlogService, private router : Router){}


  signUpForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    mobile : new FormControl('',[Validators.required,Validators.minLength(10)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  userSignup(){
    if(this.signUpForm.valid){
        this.blogService.signUp(this.signUpForm.value).subscribe(res => {
          this.signUpForm.reset();
          this.router.navigate([""]);
      })
    }
  }

}

import { Component } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private blogservice: BlogService, private router: Router){}

  ngOnInit(): void {
    
  }

  signedIn() {
      return this.blogservice.signedIn();        
  }

  userId() {
    return this.blogservice.userId();        
  }

  userEmail() {
  return this.blogservice.userEmail();        
  }

  userName() {
  return this.blogservice.userName();        
  }

  userMobile() {
  return this.blogservice.userMobile();        
  }


  signOut(){
    return this.blogservice.signOut();
    
  }

  homeRedirect(){
    
  }

  openPopup(){
    let myModal = document.getElementById('myModal');

  }
  

}

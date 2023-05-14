import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { postSchema } from '../model/postschema';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  

  private SIGNUP_URL = "http://localhost:4000/user/signup";
  private SIGNIN_URL = "http://localhost:4000/user/signin";
  private NEWPOST_URL = "http://localhost:4000/newpost";
  private POSTS_URL = "http://localhost:4000/newpost";


  // http Options
  private httpOptions = {
    headers: new HttpHeaders()
    .set("Content-type", "application/json")
    // .set("auth-token", localStorage.getItem("token"))
  };


  constructor(private http: HttpClient, private router : Router) {}

  getPosts(): Observable<postSchema[]> {
    return this.http.get<postSchema[]>(this.POSTS_URL);
  }

  getPost(_id : String){
    return this.http.get<postSchema[]>(`${this.NEWPOST_URL}/${_id}`);
  }

  editPost(postSchema:any, _id: String){
    return this.http.put<any>(`${this.NEWPOST_URL}/${_id}`, postSchema)
  }

  signUp(User : any){
    return this.http.post<any>(`${this.SIGNUP_URL}`, User);
  }

  signIn(User : any){
    return this.http.post<any>(`${this.SIGNIN_URL}`, User);
  }

  newPost(Post : any){
    return this.http.post<any>(`${this.NEWPOST_URL}`, Post)
  }

  signedIn(){
    return !! localStorage.getItem("token")
  }

  signOut(){
    localStorage.removeItem("token");
    this.router.navigate([""]);
  }

  userId(){
    return  localStorage.getItem("id")
  }
  
  userEmail(){
    return  localStorage.getItem("email")
  }
  
  userName(){
    return  localStorage.getItem("name")
  }

  userMobile(){
    return  localStorage.getItem("mobile")
  }
}

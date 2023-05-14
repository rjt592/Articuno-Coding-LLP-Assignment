import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import { BlogService } from 'src/app/Service/blog.service';
import { postSchema } from 'src/app/model/postschema';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  Post$ = new Observable<postSchema[]>;
  id : any
  

  
  
  constructor(
    private blogService : BlogService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute
    ){}


  


  ngOnInit(): void {
    this.Post$ = this.blogService.getPosts();
    console.log(this.Post$);
  }

  

  

  

}

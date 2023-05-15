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
  id : any;
  
  editpostForm : any = this.fb.group({
    postTitle: new FormControl('',[Validators.required]),
    postBody: new FormControl('',[Validators.required]),
    createdBy: new FormControl('ajay@gmail.com',[Validators.required])
  })
  
  
  constructor(
    private blogService : BlogService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute
    ){}

    config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '15rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
    };
  


  ngOnInit(): void {
    this.Post$ = this.blogService.getPosts();
    console.log(this.Post$);
  }

  editPost(){
    this.id = this.route.snapshot.paramMap.get("_id");
    console.log(this.id);
    if(this.editpostForm.valid){
      this.blogService.editPost(this.editpostForm.value, this.id).subscribe(res=>{
        this.editpostForm.reset();
        this.router.navigate(["main"]);
      })
    }
  }

  

  

}

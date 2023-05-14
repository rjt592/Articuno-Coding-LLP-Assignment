import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/Service/blog.service';
import { postSchema } from 'src/app/model/postschema';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent{

  Post$ = new Subscription;
  Post : any;
  id:any;

  constructor(
    private blogService : BlogService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute
  ){}

  editpostForm : any = this.fb.group({
    postTitle: new FormControl('',[Validators.required]),
    postBody: new FormControl('',[Validators.required]),
    createdBy: new FormControl('ajay@gmail.com',[Validators.required])
  })

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

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get("id");
    this.blogService.getPost(this.id).subscribe(res=>{
      this.Post = res;
    })
  }


  editPost(){
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.editpostForm.valid){
      this.blogService.editPost(this.editpostForm.value, this.id).subscribe(res=>{
        this.editpostForm.reset();
        this.router.navigate(["main"]);
      })
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from 'src/app/Service/blog.service';


@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent {

  constructor(
    private blogService : BlogService,
    private router : Router,
    private fb : FormBuilder
  ){}

  htmlContent: any;
  email : any ;

  postForm : any = this.fb.group({
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


  userEmail(){
    this.email = this.blogService.userEmail();
    return this.email;
  }

  submitNewpost(){
    if(this.postForm.valid){
      const formData : any = new FormData();
      formData.append('postTitle', this.postForm.get('postTitle').value)
      formData.append('postBody', this.postForm.get('postBody').value)
      formData.append('createdBy', this.postForm.get('createdBy').value)
      console.log(formData);
      this.blogService.newPost(this.postForm.value).subscribe(res =>{
        console.log(res)
        this.postForm.reset();
        this.router.navigate(["newpost"]);
      })
    }
  }

}

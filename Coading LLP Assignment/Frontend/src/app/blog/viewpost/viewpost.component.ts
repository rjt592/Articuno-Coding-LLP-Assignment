import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { postSchema } from 'src/app/model/postschema';
import { BlogService } from 'src/app/Service/blog.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  Post$ = new Observable<postSchema[]>;
  p : any;
  searchText = '';
  constructor(private blogService : BlogService){}


  ngOnInit(): void {
    this.Post$ = this.blogService.getPosts();
    console.log(this.Post$);
  }

}

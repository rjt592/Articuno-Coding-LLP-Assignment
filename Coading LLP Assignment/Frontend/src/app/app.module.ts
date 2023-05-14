import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './blog/main/main.component';
import { SidebarComponent } from './blog/sidebar/sidebar.component';
import { PostsComponent } from './blog/posts/posts.component';
import { NewpostComponent } from './blog/newpost/newpost.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { ViewpostComponent } from './blog/viewpost/viewpost.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditpostComponent } from './blog/editpost/editpost.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    MainComponent,
    SidebarComponent,
    PostsComponent,
    NewpostComponent,
    ViewpostComponent,
    EditpostComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

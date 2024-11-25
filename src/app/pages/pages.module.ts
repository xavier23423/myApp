import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from '../page/posts/posts.component';

@NgModule({
  declarations: [

    AboutComponent,
    ContactComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

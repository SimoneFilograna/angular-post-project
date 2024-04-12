import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';



@NgModule({
  declarations: [
    PostsListComponent,
    CategoryBarComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }

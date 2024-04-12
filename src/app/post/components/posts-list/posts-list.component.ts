import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../../services/posts-service.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Array<Post>>

  //categoria ricevuto dal figlio salvata
  receivedData!: string;

  constructor(
    private postsService: PostsServiceService
  ) { }

  ngOnInit(): void {
    this.loadPostList()
  }


  loadPostList() {
    this.posts$ = this.postsService.getPostList()
  }

  catReceived(data: string) {
    this.receivedData = data;
    console.log(data)
    this.posts$ = this.postsService.getPostByCategory(data)
  }
}
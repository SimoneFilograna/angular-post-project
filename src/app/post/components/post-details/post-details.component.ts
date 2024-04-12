import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsServiceService } from '../../services/posts-service.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post!: Post
  destroy$: Subject<void> = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    private postService: PostsServiceService
  ) { }


  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const idPost: any = routeParam.get('id')
    this.postService.getPostById(idPost).pipe(takeUntil(this.destroy$)).subscribe(post => this.post = post)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  apiUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getPostList(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.apiUrl}/posts`)
      .pipe(map(post => post.sort((a, b) => a.dataCreazione > b.dataCreazione ? -1 : 1)))
  }

  getPostByCategory(cat: string): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.apiUrl}/posts`)
      .pipe(map(posts => posts.filter(post => post.categoria === cat).sort((a, b) => a.dataCreazione > b.dataCreazione ? -1 : 1)))
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}`).pipe(map(ps => ps))
  }
}
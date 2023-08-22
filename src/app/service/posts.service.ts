import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getPosts(limit: number = 2) {
    return this.http.get<Post[]>(`${this.baseUrl}/posts?_limit=${limit}`);
  }
  addPost(post: Post) {
    return this.http.post<Post | any>(`${this.baseUrl}/posts`, post);
  }
  deletePost(id: number) {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { PostState } from 'src/app/reducers/posts.reducer';
import * as postSelector from '../../../selectors/posts.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  error$?: Observable<Error>;

  constructor(private postStore: Store<PostState>) {}

  ngOnInit(): void {
    this.posts$ = this.postStore.select(postSelector.getAllPosts);
    this.error$ = this.postStore.select(postSelector.getPostsError);
  }
}

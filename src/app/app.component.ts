import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from './reducers/posts.reducer';
import { Observable } from 'rxjs';
import { getPostsLoading } from './selectors/posts.selector';
import { GetPostsAction } from './actions/posts.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-sample';
  loading$!: Observable<boolean>;

  constructor(private postStore: Store<PostState>) {}

  ngOnInit(): void {
    this.allPost();
    this.loading$ = this.postStore.select(getPostsLoading);
  }
  allPost(): void {
    this.postStore.dispatch(GetPostsAction());
  }
}

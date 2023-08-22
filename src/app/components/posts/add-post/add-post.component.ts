import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { PostState } from 'src/app/reducers/posts.reducer';
import * as postAction from '../../../actions/posts.actions';
import { Observable } from 'rxjs';
import { getPostsLoading } from 'src/app/selectors/posts.selector';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  loading$!: Observable<boolean>;
  post: Post = {
    id: 0,
    userId: 0,
    title: '',
    body: '',
  };
  constructor(private postStore: Store<PostState>) {}
  ngOnInit() {
    this.postStore.select(getPostsLoading).subscribe((isLoding) => {
      if (!isLoding) {
        this.post.title = '';
        this.post.body = '';
      }
    });
  }
  createPost() {
    this.post.id = Math.floor(Math.random() * 10);
    this.post.userId = Math.floor(Math.random() * 100);
    console.log('Post: ', this.post);

    this.postStore.dispatch(
      postAction.AddPostAction({ data: { ...this.post } })
    );
  }
}

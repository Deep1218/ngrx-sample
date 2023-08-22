import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/reducers/posts.reducer';

import * as postAction from '../../../actions/posts.actions';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css'],
})
export class DeletePostComponent {
  @Input()
  index!: number;

  constructor(private postStore: Store<PostState>) {}

  deletePost() {
    this.postStore.dispatch(postAction.DeletePostAction({ id: this.index }));
  }
}

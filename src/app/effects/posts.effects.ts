import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from '../service/posts.service';
import * as postAction from '../actions/posts.actions';
import { PostActionTypes } from '../actions/posts.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActionTypes.GET_POSTS),
      mergeMap((action: any) =>
        this.postsService.getPosts(action.limit).pipe(
          map((data) => postAction.GetPostsSuccessAction({ data })),
          catchError((error) => of(postAction.GetPostsFailAction({ error })))
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActionTypes.ADD_POST),
      mergeMap((action: any) =>
        this.postsService.addPost(action.data).pipe(
          map((posts) => postAction.AddPostSuccessAction({ data: posts })),
          catchError((error) => of(postAction.AddPostFailAction({ error })))
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActionTypes.Delete_POST),
      mergeMap((data: any) =>
        this.postsService.deletePost(data.id).pipe(
          map((data2) => postAction.DeletePostSuccessAction({ data: data2 })),
          catchError((error) => of(postAction.DeletePostFailAction({ error })))
        )
      )
    )
  );
}

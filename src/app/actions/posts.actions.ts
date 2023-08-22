import { Action, createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';

export enum PostActionTypes {
  ADD_POST = '[Post] Add post',
  ADD_POST_SUCCESS = '[Post] Add post success',
  ADD_POST_FAIL = '[Post] Add post fail',

  GET_POSTS = '[Post] Get posts',
  GET_POSTS_SUCCESS = '[Post] Get posts success',
  GET_POSTS_FAIL = '[Post] Get posts fail',

  Delete_POST = '[Post] Delete post',
  Delete_POST_SUCCESS = '[Post] Delete post success',
  Delete_POST_FAIL = '[Post] Delete post fail',
}

export const GetPostsAction = createAction(PostActionTypes.GET_POSTS); // add code here
export const GetPostsSuccessAction = createAction(
  PostActionTypes.GET_POSTS_SUCCESS,
  props<{ data: Post[] }>()
);
export const GetPostsFailAction = createAction(
  PostActionTypes.GET_POSTS_FAIL,
  props<{ error: any }>()
);
export const AddPostAction = createAction(
  PostActionTypes.ADD_POST,
  props<{ data: Post }>()
);
export const AddPostSuccessAction = createAction(
  PostActionTypes.ADD_POST_SUCCESS,
  props<{ data: Post }>()
);
export const AddPostFailAction = createAction(
  PostActionTypes.ADD_POST_SUCCESS,
  props<{ error: any }>()
);
export const DeletePostAction = createAction(
  PostActionTypes.Delete_POST,
  props<{ id: number }>()
);
export const DeletePostSuccessAction = createAction(
  PostActionTypes.Delete_POST_SUCCESS,
  props<{ data: string | any }>()
);
export const DeletePostFailAction = createAction(
  PostActionTypes.Delete_POST_FAIL,
  props<{ error: any }>()
);

import { createReducer, on } from '@ngrx/store';
import {
  AddPostAction,
  AddPostFailAction,
  AddPostSuccessAction,
  DeletePostAction,
  DeletePostFailAction,
  DeletePostSuccessAction,
  GetPostsAction,
  GetPostsFailAction,
  GetPostsSuccessAction,
} from 'src/app/actions/posts.actions';
import { Post } from 'src/app/models/posts.model';

export interface PostState {
  posts: Post[];
  error: string | any;
  loading: boolean;
}

const inittialState: PostState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ],
  loading: false,
  error: null,
};

export const PostsReducer = createReducer(
  inittialState,
  on(GetPostsAction, (state) => {
    return { ...state, loading: true };
  }),
  on(GetPostsSuccessAction, (state, { data }) => {
    return { ...state, loading: false, posts: data, error: null };
  }),
  on(GetPostsFailAction, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(AddPostAction, (state) => {
    return { ...state, loading: true };
  }),
  on(AddPostSuccessAction, (state, { data }) => {
    return {
      ...state,
      loading: false,
      posts: [data, ...state.posts],
      error: null,
    };
  }),
  on(AddPostFailAction, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(DeletePostAction, (state) => {
    return { ...state, loading: true };
  }),
  on(DeletePostSuccessAction, (state, { data }) => {
    let updatedPosts = [...state.posts];
    updatedPosts.splice(data, 1);
    return { ...state, loading: false, posts: updatedPosts, error: null };
  }),
  on(DeletePostFailAction, (state, { error }) => {
    return { ...state, loading: false, error };
  })
);

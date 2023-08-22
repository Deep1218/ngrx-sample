import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../reducers/posts.reducer';

export const getPostsState = createFeatureSelector<PostState>('posts');

export const getPostsLoading = createSelector(
  getPostsState,
  (state: PostState) => state.loading
);
export const getAllPosts = createSelector(
  getPostsState,
  (state: PostState) => state.posts
);
export const getPostsError = createSelector(
  getPostsState,
  (state: PostState) => state.error
);

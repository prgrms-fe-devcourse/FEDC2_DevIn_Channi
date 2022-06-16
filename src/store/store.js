import { configureStore } from '@reduxjs/toolkit';
import allUsersReducer from './allUsers'
import searchUsersReducer from './searchUsers';
import searchPostsReducer from './searchPosts'

export const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    searchUsers: searchUsersReducer,
    searchPosts: searchPostsReducer,
  },
});

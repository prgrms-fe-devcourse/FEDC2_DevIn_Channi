import { configureStore } from '@reduxjs/toolkit';
import allUsersReducer from './allUsers'
import searchUsersReducer from './searchUsers';
import searchPostsReducer from './searchPosts'

export default configureStore({
  reducer: {
    allUsers: allUsersReducer,
    searchUsers: searchUsersReducer,
    searchPosts: searchPostsReducer,
  },
});

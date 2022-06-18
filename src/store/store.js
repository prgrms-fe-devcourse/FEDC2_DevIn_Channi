import { configureStore } from '@reduxjs/toolkit';
import user from 'store/userSlice';
import authValidation from 'store/authValidationSlice';
import searchReducer from 'store/searchSlice';
import followReducer from 'store/followSlice';

console.log('store.js!');
export const store = configureStore({
  reducer: {
    user,
    authValidation,
    search: searchReducer,
    follow: followReducer,
  },
});

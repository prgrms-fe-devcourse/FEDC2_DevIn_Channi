import { configureStore } from '@reduxjs/toolkit';
import user from 'store/userSlice';
import authValidation from 'store/authValidationSlice';
import searchReducer from './searchSlice';

console.log('store.js!');
export const store = configureStore({
  reducer: {
    user,
    authValidation,
    search: searchReducer,
  },
});

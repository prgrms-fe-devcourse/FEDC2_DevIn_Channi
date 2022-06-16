import { configureStore } from '@reduxjs/toolkit';
import user from 'store/userSlice';
import validation from 'store/validationSlice';

export const store = configureStore({
  reducer: {
    user,
    validation,
  },
});

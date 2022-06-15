import { configureStore } from '@reduxjs/toolkit';
import user from 'store/userSlice';

export const store = configureStore({
  reducer: {
    user,
  },
});

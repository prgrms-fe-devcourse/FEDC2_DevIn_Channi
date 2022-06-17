import { configureStore } from '@reduxjs/toolkit';
import user from 'store/userSlice';
import authValidation from 'store/authValidationSlice';

export const store = configureStore({
  reducer: {
    user,
    authValidation,
  },
});

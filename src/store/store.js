import { configureStore } from '@reduxjs/toolkit';
import user from 'store/userSlice';
import authValidation from 'store/authValidationSlice';
import searchReducer from 'store/searchSlice';
import followReducer from 'store/followSlice';
import eventTypeReducer from 'store/eventTypeSlice';

export const store = configureStore({
  reducer: {
    user,
    authValidation,
    search: searchReducer,
    follow: followReducer,
    eventType: eventTypeReducer,
  },
});

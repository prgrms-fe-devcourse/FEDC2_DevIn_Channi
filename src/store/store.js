import { configureStore } from '@reduxjs/toolkit';
import user from 'store/userSlice';
import authValidation from 'store/authValidationSlice';
import searchReducer from 'store/searchSlice';
import followReducer from 'store/followSlice';
import eventTypeReducer from 'store/eventTypeSlice';
import filterItemReducer from 'store/filterItemSlice';
import filteredEventReducer from 'store/filteredEventSlice';

export const store = configureStore({
  reducer: {
    user,
    authValidation,
    search: searchReducer,
    follow: followReducer,
    eventType: eventTypeReducer,
    filterItem: filterItemReducer,
    filteredEvent: filteredEventReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});

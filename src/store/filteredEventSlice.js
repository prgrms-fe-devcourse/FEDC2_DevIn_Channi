import { createSlice } from '@reduxjs/toolkit';

export const filteredEvent = createSlice({
  name: 'filteredEvent',
  initialState: { filteredEvent: [] },
  reducers: {
    setFilteredEvent: (state, action) => {
      console.log('reducers', action.payload);
      state.filteredEvent = [...action.payload];
    },
  },
});

export const { setFilteredEvent } = filteredEvent.actions;
export default filteredEvent.reducer;

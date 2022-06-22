import { createSlice } from '@reduxjs/toolkit';

export const filteredEvent = createSlice({
  name: 'filteredEvent',
  initialState: { filteredEvent: [] },
  reducers: {
    setFilteredEvent: (state, action) => {
      state.filteredEvent = [...action.payload];
    },
  },
});

export const { setFilteredEvent } = filteredEvent.actions;
export default filteredEvent.reducer;

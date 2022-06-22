import { createSlice } from '@reduxjs/toolkit';

export const eventType = createSlice({
  name: 'eventType',
  initialState: { type: 'event' },
  reducers: {
    setEventType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setEventType } = eventType.actions;
export default eventType.reducer;

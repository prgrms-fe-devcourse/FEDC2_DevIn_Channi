import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const validation = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setValidation: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setValidation } = validation.actions;
export default validation.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const authValidation = createSlice({
  name: 'authValidation',
  initialState,
  reducers: {
    setAuthValidation: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setAuthValidation } = authValidation.actions;
export default authValidation.reducer;

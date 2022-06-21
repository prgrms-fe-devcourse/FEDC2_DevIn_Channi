import { createSlice } from '@reduxjs/toolkit';

export const filterItem = createSlice({
  name: 'filterItem',
  initialState: { filterItem: [] },
  reducers: {
    setFilterItem: (state, action) => {
      state.filterItem = [...state.filterItem, action.payload];
    },
  },
});

export const { setFilterItem } = filterItem.actions;
export default filterItem.reducer;

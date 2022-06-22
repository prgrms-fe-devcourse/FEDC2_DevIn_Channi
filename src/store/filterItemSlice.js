import { createSlice } from '@reduxjs/toolkit';

export const filterItem = createSlice({
  name: 'filterItem',
  initialState: { filterItem: [] },
  reducers: {
    setFilterItem: (state, action) => {
      if (state.filterItem.includes(action.payload)) {
        state.filterItem = [
          ...state.filterItem.filter(item => item !== action.payload),
        ];
      } else {
        state.filterItem = [...state.filterItem, action.payload];
      }
    },
    setInitFilterItem: state => {
      state.filterItem = [];
    },
  },
});

export const { setFilterItem, setInitFilterItem } = filterItem.actions;
export default filterItem.reducer;

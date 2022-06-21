import { createSlice } from '@reduxjs/toolkit';

export const filterItem = createSlice({
  name: 'filterItem',
  initialState: { filterItem: [] },
  reducers: {
    setFilterItem: (state, action) => {
      console.log('action.payload', action.payload);

      state.filterItem = [
        ...state.filterItem.filter(item => {
          item !== action.payload;
        }),
        action.payload,
      ];
      console.log('change State', state.filterItem);
    },
  },
});

export const { setFilterItem } = filterItem.actions;
export default filterItem.reducer;

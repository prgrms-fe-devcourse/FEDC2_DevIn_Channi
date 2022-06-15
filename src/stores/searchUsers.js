/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchUsersSlice = createSlice({
    name: "searchUsers",
    initialState: { value: null },
    reducers: {
        userInfo: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { userInfo } = searchUsersSlice.actions;
export default searchUsersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const allUsersSlice = createSlice({
    name: "allUsers",
    initialState: { value: [] },
    reducers: {
        allusers: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { allusers } = allUsersSlice.actions;
export default allUsersSlice.reducer;
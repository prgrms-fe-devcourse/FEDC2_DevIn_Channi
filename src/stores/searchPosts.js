/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchPostsSlice = createSlice({
    name: "searchPosts",
    initialState: { value: null },
    reducers: {
        postInfo: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { postInfo } = searchPostsSlice.actions;
export default searchPostsSlice.reducer;
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: "search",
    initialState: { value: null },
    reducers: {
        userInfo: (state, action) => {
            state.value = action.payload
        },
        postInfo: (state, action) => {
            // 필터써서 post만 추출해야함
            console.log(state, action)
        },
    },
});

export const { userInfo, postInfo } = searchSlice.actions;
export default searchSlice.reducer;
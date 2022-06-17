import { createSlice } from '@reduxjs/toolkit';

export const search = createSlice({
  name: 'search',
  initialState: { alluser: null, user: null, post: null },
  reducers: {
    setAllUsers: (state, action) => {
      state.alluser = action.payload;
    },
    setUsersInfo: (state, action) => {
      state.user = action.payload;
    },
    setPostsInfo: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setAllUsers, setUsersInfo, setPostsInfo } = search.actions;
export default search.reducer;

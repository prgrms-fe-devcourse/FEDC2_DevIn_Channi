import { createSlice } from '@reduxjs/toolkit';

export const follow = createSlice({
  name: 'follow',
  initialState: { followers: [], following: [] },
  reducers: {
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setFollowing: (state, action) => {
      state.following = action.payload;
    },
  },
});

export const { setFollowers, setFollowing } = follow.actions;
export default follow.reducer;
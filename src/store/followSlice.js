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
    addFollowing: (state, action) => {
      state.following.push(action.payload); 
    },
    removeFollowing: (state, action) => {
      state.following.filter(({_id}) => _id !== action.payload); 
    },
  },
});

export const { setFollowers, setFollowing, addFollowing, removeFollowing } = follow.actions;
export default follow.reducer;
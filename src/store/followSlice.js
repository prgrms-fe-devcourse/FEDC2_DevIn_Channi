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
      const id = action.payload
      state.following = state.following.filter(({_id}) => _id !== id); 
    },
  },
});

export const { setFollowers, setFollowing, addFollowing, removeFollowing } = follow.actions;
export default follow.reducer;
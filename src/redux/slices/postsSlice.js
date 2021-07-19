import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../service/api';

const initialState = {
  posts:[], 
  loading:false
};

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async () => {
    const response = await api.get('posts');    
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,  
  reducers: {},
  
  extraReducers: {    
    [fetchPosts.pending] : (state)=>{
      state.loading = true
    },
     [fetchPosts.fulfilled] : (state, action)=>{
      state.posts = action.payload
    }
  }
})


export default postsSlice.reducer;

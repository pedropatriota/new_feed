import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../service/api';

const initialState = {
  comments:[] , 
  loading: false, 
  newComment: {
    id:null,
    name:"", 
    body: "",
    email:"",
    postId:null
  }
};

export const fetchComments = createAsyncThunk(
  'comments/fetch',
  async () => {
    const {data} = await api.get('comments');    
    return data;
  }
);

export const postComments = createAsyncThunk(
  'comments/post',
  async (newComment) => {    
    const {data} = await api.post('comments', newComment);     
    return data    
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,  
  reducers: {   
    add: (state)=> void(state.comments.push(state.newComment) )   
  },
  
  extraReducers: {  
    [fetchComments.pending]:(state)=>{
      state.loading=true      
    }, 
    [fetchComments.fulfilled]: (state, action) => {         
      state.comments = action.payload
      state.loading = false
    },
  
    [postComments.pending]:(state)=>{
      state.loading=true      
    }, 
    [postComments.fulfilled]: (state, action) => {         
      state.newComment = action.payload
      state.loading = false
    },
  }
})

export const{add}= commentsSlice.actions
export default commentsSlice.reducer;
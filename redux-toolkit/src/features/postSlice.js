import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"



export const fetchPost=createAsyncThunk("posts/fetchPosts",async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let value=await response.json()
    console.log(value)
    return value
})
const postSlice =createSlice({
    name:"posts",
     initialState:{
      posts:[],
      loading:false,
      error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.pending,(state)=>{
           state.loading=true;
           state.error=null;
        })
        .addCase(fetchPost.fulfilled,(state,action)=>{
            state.loading=false;
            state.posts=action.payload
        })
        .addCase(fetchPost.rejected,(state,action)=>{
            state.loading=false;
            state.error="Failed tio fetch postes"
        });
    },
});

export default postSlice.reducer;
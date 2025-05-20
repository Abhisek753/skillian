import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../features/postSlice'

const PostList = () => {
    const dispatch=useDispatch()
    const {posts,loading,error}= useSelector((state)=>state.post);
    
    console.log(posts,loading,error)
 
    useEffect(()=>{
         dispatch(fetchPost())
    },[dispatch]);
  return (

    <div>
       <h2>Post Listing</h2>
       
    </div>
  )
}

export default PostList
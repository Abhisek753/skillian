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
         {loading && <h3>Loading...</h3>}
         {error && <h3>Error: {error}</h3>}
         <ul>
             {posts.map(post => (
                 <li key={post.id}>{post.title}</li>
             ))}
         </ul>
    </div>
  )
}

export default PostList
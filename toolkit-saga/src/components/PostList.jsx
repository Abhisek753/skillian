import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from '../features/PostSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const {posts,loading,error}=useSelector((state)=>state.post)
  console.log(posts,loading,error,"initial state log")
    const handleFetchPost = () => {
        console.log('Fetching posts...');
        dispatch(fetchPostsRequest())
    
    }

    return (
        <div>
            <button onClick={handleFetchPost}>Fetch Posts</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}    
        {posts && posts.length > 0 ? (
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No posts available</p>
        )}
        </div>
      )
}

export default PostList
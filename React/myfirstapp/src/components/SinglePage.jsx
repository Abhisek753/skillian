import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePage = () => {
  const {id}=useParams()
  console.log(id);
  return (
    <div>
      <h1>{id}</h1>
        <h2>
           Single Page 
        </h2>
    </div>
  )
}

export default SinglePage
import React from 'react'
import ParentComponent from './ParentComponent'

const Combine = () => {
    var age=24;
  return (
    <div>
        <ParentComponent age={age} />
    </div>
  )
}

export default Combine
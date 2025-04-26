import React from 'react'

const Child = React.memo(({handleClick}) => {
    console.log("child is rendering")
  return (
    <div>
        <button className="bg-red-400" onClick={handleClick}>Click</button>
    </div>
  )
})

export default Child
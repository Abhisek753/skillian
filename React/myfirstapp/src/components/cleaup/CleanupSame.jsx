import React, { useEffect, useState } from 'react'

const CleanupSame = () => {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log('Effect ran for count:', count)

  //   return () => {
  //     console.log('🧹 Cleanup for count:', count)
  //   }
  // }, [count]) // 🔁 runs every time count changes

  useEffect(() => {
    console.log('Effect ran for count:', count)
    
    return ()=>{
      console.log("cleanup function")
    }

  }, [count]) // Still runs on count change, but no cleanup!

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CleanupSame

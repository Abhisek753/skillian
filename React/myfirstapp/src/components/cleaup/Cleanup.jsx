import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1) 
      console.log("Timer count:", count)
    }, 2000)

    return () => {
      clearInterval(interval) 
      console.log("Timer cleaned up")
    }
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(prev => prev + 1)
  //     console.log("Timer count:", count)
  //   }, 2000)


  // }, [])


  return (
    <div>
      Timer: {count}
    </div>
  )
}

const Cleanup = () => {
  const [mount, setMount] = useState(true)

  return (
    <div>
      Cleanup Function
      <div>
        {mount && <Timer />}
        <button onClick={() => setMount(!mount)}>Toggle Timer</button>
      </div>
    </div>
  )
}

export default Cleanup

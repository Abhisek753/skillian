import React, { useCallback, useState } from 'react'
import Child from './components/optimise/Child';
import Cleanup from './components/cleaup/Cleanup';
import CleanupSame from './components/cleaup/CleanupSame';
import Focus from './components/optimise/Focus';

const App = () => {
  const [count,setCount]=useState(0);
  console.log("parent is rendering")
  const handleClick=()=>{
   console.log("button is clicked")
  }
  // const handleClick=useCallback(()=>{
  //    console.log("parent func")
  // },[])
  return (
    <div>
      {/* <button className='bg-blue-500 mb-8' onClick={()=>setCount(count+1)}>increase</button> */}
      {/* <Child  handleClick={handleClick}/> */}
      {/* <Cleanup/> */}
      <CleanupSame/>
      {/* <Focus/> */}
    </div>
  )
}

export default App
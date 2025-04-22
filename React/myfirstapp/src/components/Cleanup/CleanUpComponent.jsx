import React, { useEffect, useState } from 'react'


// const Child = () => {
//     const [count,setCount]=useState(0)

//     useEffect(()=>{
//       console.log("use effect called")
//       return ()=>{
//         console.log("Cleanup function")
//       }
//     },[])

//     return (
//       <div>
//           <h2>Child component</h2>
//           <button></button>
  
//       </div>
//     )
//   }

const CleanUpComponent = () => {
  
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     console.log("use effect run")
    //     setCount(count + 1);
    //   }, 1000);
  
    //   return () =>{ clearInterval(interval)
    //     console.log("use cleanup run")

    //   };
    // }, [count]);
  
    return <div>{count}</div>;
  }

export default CleanUpComponent
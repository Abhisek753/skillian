import React, { useCallback, useMemo, useState } from 'react'
import CallbackChild from './Optimise/CallbackChild';

const App = () => {
  const [count, setCount] = useState(0);
  // const [input, setInput] = useState("");
  // // let data="bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin"
console.log("parent is rendering")


  const handleClick=useCallback(()=>{
    console.log("hi parent component")
  },[count]);

// const handleClick=()=>{
//   console.log("hi parent component")
// }

  // const expensiveCal = (num) => {
  //   console.log("calculating,,,,");
  //   let result = 0;
  //   for (let i = 0; i < 100000; i++) {
  //     result += num;
  //   }
  //   // console.log(result,"result")
  //   return result;
  // };

  // const calvalue = useMemo(() =>  expensiveCal(count), [count]);
  // // const calvalue =   expensiveCal(count);
  


  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>{calvalue}</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
       <CallbackChild  handleClick={handleClick}/>
    </div>
  )
}

export default App




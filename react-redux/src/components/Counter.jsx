import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counter/action';

const Counter = () => {
    const count=useSelector(state=>state.counter.count);
    const name=useSelector(state=>state.counter.user);

    const dispatch=useDispatch()
  return (
    <div>
        <h2>{count}---{name}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
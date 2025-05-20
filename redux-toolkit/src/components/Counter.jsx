import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../features/CounterSlice'

const Counter = () => {
    const count =useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <div>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>Increment By 5</button>
            
        </div>
    </div>
  )
}

export default Counter
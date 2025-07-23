'use client'

import React, { useState } from 'react'

export default function  CounterApp() {
    const [count, setCount] = useState(0);

    const increment =()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    
  return (
    <div>
      <h1>Counter Application</h1>
      <p>Current Counter is {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

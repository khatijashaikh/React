import React, { useContext } from 'react'
import { MyCouterContext } from '../context/CounterContext';

 const CounterContext = () => {
   const{state, dispatch}= useContext(MyCouterContext)
   function increment(){
    dispatch ({type: "INCREMENT"})
   }
   function reset(){
    dispatch ({type: "RESET"})
   }
   function decrement(){
    dispatch ({type: "DECREMENT"})
   }
  return (
    <div>
        <h1>Context Counter</h1>
        <h1>Counter: {state.counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterContext;

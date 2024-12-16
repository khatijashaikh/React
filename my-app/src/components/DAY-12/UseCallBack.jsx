import React, { useCallback, useState } from 'react'
import Childrencomponent from './Childrencomponent';

export const UseCallBack = () => {
    const [counter, setCounter]=useState(1);
    const [secondCounter, setSecondCounter]=useState(10);
    
    // const increment =()=>{
    //     setCounter(counter+1)
    // }
    const increment = useCallback(
        ()=>{
            setCounter(counter+1);
        },
         [counter]
    )
    const secondincrement=()=>{
 setSecondCounter(secondCounter+1);
    }
    
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>+</button>
        <h1>Second Counter: {secondCounter}</h1>
        <button onClick={secondincrement}>+</button>
       <Childrencomponent Increment={increment} counter={counter} />

    </div>
  )
}

import { useState } from "react";

function UseState(){
    const [counter, setCounter]=useState(1);    //counter is only to access and setCounter is to update state
    console.log(counter,"counter");
    function increment(){
        setCounter(counter + 1);
    }
    function decrement(){
        setCounter(counter - 1)
    }
    function reset(){
        setCounter(1)
    }
    return(
        <div>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
        </div>
    )
}
export default UseState;
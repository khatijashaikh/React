import React, { act, useReducer } from "react";

function Reducer(state, action) {
//   (state = { counter: 10 }), (action = { type: "INCREMENT" });
// console.log(state, action, "State and action")
switch(action.type){
   case "INCREMENT":
      return {...state, counter: state.counter+1}
   case "RESET":
      return {...state, counter:10}
   case "DECREMENT":
      return {...state, counter: state.counter-1}
      default:
         return state;
}
}

const InitialState = { counter: 10, user:"null" };

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  function Increment(){
   dispatch({ type: "INCREMENT"})
  }
  function Reset(){
   dispatch({type: "RESET"})
  }
  function Decrement(){
   dispatch({type: "DECREMENT"})
  }

  return (
    <div>
      <h1>Counter {state.counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
};

export default UseReducer;

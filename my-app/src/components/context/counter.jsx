
import { children, createContext, useReducer } from "react"


const MyCounterContext=createContext();


function Reducer(state, action){
    switch(action.type){
        case "INCREMENT":
           return {...state, counter: state.counter+1}
        case "RESET":
           return {...state, counter:1}
        case "DECREMENT":
           return {...state, counter: state.counter-1}
          
    }
}

const InitialState ={counter: 1}

//HOC=> it accept another component as props like children
const ParentCounterContext=({children})=>{
    const[state,dispatch]=useReducer(Reducer,InitialState)
    return(
        <MyCounterContext.Provider value={{state, dispatch}} >
            {children}
        </MyCounterContext.Provider>
    )
}

export default ParentCounterContext;
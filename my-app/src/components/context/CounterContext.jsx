import { act, Children, createContext, useReducer } from "react";

export const MyCouterContext=createContext();


function Reducer(state, action){
    switch(action.type){
        case "INCREMENT":
            return {...state, counter: state.counter + 1}
        case "RESET":
            return {...state, counter: 1}
        case "DECREMENT":
            return {...state, counter: state.counter - 1}
    }
}

const InitialState ={ counter:1};


//Higher Order Componnet HOC=> accept other component as a prop
const ParentCounterContext=({children})=>{
    const [state, dispatch]= useReducer(Reducer,InitialState)
    return(
        <MyCouterContext.Provider value={{state, dispatch}}>
            {children}
        </MyCouterContext.Provider>
    )
}

export default ParentCounterContext;



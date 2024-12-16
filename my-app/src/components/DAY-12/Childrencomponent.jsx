import React, { memo } from 'react'

 const Childrencomponent = ({counter, increment}) => {
    console.log("Inside Children Component")
  return (
    <div>
       <h1> Childrencomponent: {counter}</h1>
       <button onClick={increment}>+</button>
        </div>
  )
}
export default memo (Childrencomponent);

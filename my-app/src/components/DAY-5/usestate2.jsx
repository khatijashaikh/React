import { useEffect, useState } from "react";

function UseStateTwo(){
    const [isUserLoggedIn, setUserLoggedIn]=useState(true);
    console.log(isUserLoggedIn, "isUserLoggedIn")
  
    function toggleLogin(){                                                               
        setUserLoggedIn(!isUserLoggedIn)
    }
    useEffect(()=>{
        alert("LOGGED IN")                       // on initial page render
    })


return (
   <div>
{isUserLoggedIn ?(
    <div>
        <h1>Welcome!</h1>
        <button onClick={toggleLogin}>Logout</button>
        </div>
):
(
    <div>
         <h1>Please Login</h1>
         <button onClick={toggleLogin}>Login</button>
    </div>
)
}
   </div>
)
}
export default UseStateTwo;




//ternary opertor   same as ifelse
//condition? statement1:statement2

//example :
// if(2>1){
// comsole.log(2 is greater)}
// else{
    // console.log(2 is not greater than 1)
// }


// ternary: 2>1? <div>True(greater)</div> : <div>false(not greater)</div>











// first approach for true false login logout
// function toggleLogInFalse(){
//     setUserLoggedIn(false);
// }
// function toggleLogInTrue(){
//     setUserLoggedIn(true);
// }


// <div>
// <h1>Welcome!</h1>
// <button onClick={toggleLogInFalse}>Logout</button>
// </div>
// ):
// (
// <div>
//  <h1>Please Login</h1>
//  <button onClick={toggleLogInTrue}>Login</button>
// </div>
// )
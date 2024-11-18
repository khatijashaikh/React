import {  useNavigate, useNavigation } from "react-router-dom";

function Home(){
    const router= useNavigate();
    function redirectToLogin(){
        router("/login")
    }
    function redirectToRegister(){
        router("register")
    }
    function redirectToUseState(){
        router("/usestate")
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={redirectToLogin}>Go to Login Page</button>
            
            <button onClick={redirectToRegister}>Go to Register Page</button>
            
            <button onClick={redirectToUseState}>Go to Usestate Page</button>
        </div>
    );
    }
    export default Home
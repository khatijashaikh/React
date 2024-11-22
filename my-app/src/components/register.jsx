import { useState } from "react";

function Register(){
    const [name, setName]=useState("Awdiz")
    function handleSubmit(){}
    // console.log(name, "name")
    function handleChange(event){
console.log(event.target.value, event.target.name);
setName(event.target.value)
    }
return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br/>
<input name="username" onChange={handleChange} type="text" />
<br />
<input type="submit" value="Click to register"/><br />
<label>Email:</label>
            <br/>
<input name="useremail" onChange={handleChange} type="text" />
<br />
<input type="submit" value="Click to register"/>
        </form>
    </div>
);
}
export default Register
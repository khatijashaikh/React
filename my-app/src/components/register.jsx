import { useState } from "react";

function Register(){
    const [userdata, setUserData]=useState({username:'', useremail:'', userpassword: '', userconfirmpassword:''})
   console.log(userdata,"userdata")
    async function handleSubmit(event){
        event.preventDefault();
        if(!userdata.username && !userdata.useremail && !userdata.userpassword && !userdata.userconfirmpassword){
            return alert("Please fill all the required fields.")
        }
        try{
            // const response = await axios.post("/api/register",{userdata})
            //backend API call
            const response={data:{success:true, message: "Registration Completed"}}
            if(response.data.success){
                alert(response.data.message)
            }
            else{
                alert(response.data.message)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    // console.log(name, "name")
    function handleChange(event){
console.log(event.target.value, event.target.name);
setUserData({...userdata,[event.target.name]: event.target.value})

    }
return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br/>
<input name="username" onChange={handleChange} type="text" />
<br />
<label>Email:</label>
            <br/>
<input name="useremail" onChange={handleChange} type="text" />
<br />
<label>Password:</label>
            <br/>
<input name="userpassword" onChange={handleChange} type="text" />
<br/>
<label>Confirm Password:</label>
            <br/>
<input name="userconfirmpassword" onChange={handleChange} type="text" />
<br />
<input type="submit" value="Click to register"/>
        </form>
    </div>
);
}
export default Register
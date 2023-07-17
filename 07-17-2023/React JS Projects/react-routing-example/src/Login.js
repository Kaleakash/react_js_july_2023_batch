import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Login() {
let [email,setEmail]=useState("");
let [password,setPassword]=useState("");
let navigate = useNavigate();   // this hook help use to navigate with condition. 

let reset  = (event)=> {
    setEmail("");
    setPassword("");
}
let checkUser = (event)=> {
    event.preventDefault();
    if(email=="akash@gmail.com" && password=="123"){
        alert("successfully login");
        navigate("/dashboard");
    }else {
        alert("failure try once again");
    }
    reset();
}
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={checkUser}>
            <label>EmailId</label>
            <input type="email" name={email} value={email} onChange={(event)=>setEmail(event.target.value)}/><br/>
            <label>Password</label>
            <input type="password" name={password} value={password} onChange={(event)=>setPassword(event.target.value)}/><br/>
            <input type="submit"/>
            <input type="reset" onClick={reset}/>
            </form>
        </div>
    )

}

export default Login;
import { useState } from "react";
function Login() {
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");

let [emailid1,setEmailId1]=useState("");
let [password1,setPassword1]=useState("");
let [msg1,setMessage1]=useState("");
let [msg2,setMessage2]=useState("");
function handleChange(event){
    //console.log(event);
    let name = event.target.name;
    // let value = event.target.value;
    // //console.log(name+" "+value);
    // setEmailId(value);

    if(name=="emailid"){
        setEmailId(event.target.value); 
    }else {
        setPassword(event.target.value);
    }
}
let handleSubmit = (event)=> {
        event.preventDefault();
       if(emailid=="akash@gmail.com" && password=="123"){
        setMessage1("successfully login")
            //alert("Successsfully login")
       }else {
            //alert("failure try once again")
            setMessage1("failure try once again")
       }
       reset();
}
let reset= (event)=> {
    setEmailId("");
    setPassword("");
}

let handleSubmit1 = (event)=> {
    event.preventDefault();
   if(emailid1=="akash@gmail.com" && password1=="123"){
        alert("Successsfully login")
   }else {
        alert("failure try once again")
   }
   reset1();
}
let reset1= (event)=> {
setEmailId1("");
setPassword1("");
}
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <label>EmailiId</label>
                     <input type="email" value={emailid} name="emailid" onChange={handleChange}/><br/>
                <label>Password</label>
                        <input type="password" value={password} name="password" onChange={handleChange}/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="reset" onClick={reset}/>
            </form>
            <span>{msg1}</span>
            <hr/>
            
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit1}>
                <label>EmailiId</label>
                     <input type="email" value={emailid1} name="emailid1" onChange={(e)=>setEmailId1(e.target.value)}/><br/>
                <label>Password</label>
                        <input type="password" value={password1} name="password1" onChange={(e)=>setPassword1(e.target.value)}/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="reset" onClick={reset1}/>
            </form>
        </div>
    )
}

export default Login;
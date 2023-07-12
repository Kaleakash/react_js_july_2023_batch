import { useContext, useState } from "react";
import { MyContext } from "./Context";

function AddUser() {
let [user,setUser]=useState({name:"",age:0});
let [name,setName]=useState("");
let [age,setAge]=useState(0)
let {addUser}=useContext(MyContext)
let sendUserToApp= ()=> {
   console.log("add user fun called..")
   console.log(user);
   addUser(user); 
   setUser({name:"",age:0});
}
let sendUserToAppSeparateProperty=()=> {
    let user = {"name":name,"age":age}
    console.log(user);
    addUser(user)
    setName("");
    setAge(0);
}
    return(
        <div>
            <h2>Add User</h2>
            <form>
            <label>Name</label>
            <input type="text" name="user.name" value={user.name}
            onChange={
               (event)=>setUser(u=>{return {...u,name:event.target.value}})
            }
            /><br/>
            <label>Age</label>
            <input type="number" name="user.age" value={user.age}
            onChange={
                (event)=>setUser(u=>{return {...u,age:event.target.value}})
             }
            /><br/>
            <input type="button" value="Add User"
            onClick={sendUserToApp}/>
            </form>
             <br/>
             <form>
            <label>Name</label>
            <input type="text" name="name" value={name}
            onChange={
               (event)=>setName(event.target.value)
            }
            /><br/>
            <label>Age</label>
            <input type="number" name="age" value={age}
            onChange={
                (event)=>setAge(event.target.value)
             }
            /><br/>
            <input type="button" value="Add User"
            onClick={sendUserToAppSeparateProperty}/>
            </form>
            
        </div>
    )
}

export default AddUser;
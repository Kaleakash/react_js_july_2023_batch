import { useState } from "react";
import { useSelector } from "react-redux";

function FirstComponent() {
let [fname,setFname]=useState("First Component name")
// useSelector is a hook part of react-redux allow to access global state variable in any component. 
let gname   = useSelector(gs=>gs.name);
let count = useSelector(gs=>gs.count);
let emp = useSelector(gs=>gs.emp);
    return(
        <div>
            <h2>First Component</h2>
            <p>Local variable part of component{fname}</p>
            <p>Global variable part of store {gname}</p>
            <p>Count value in first component is {count}</p>
            <h2>Employee details from store is </h2>
            <p>id is {emp.id} name is {emp.name} salary is {emp.salary}</p>
        </div>
    )
}


export default FirstComponent;
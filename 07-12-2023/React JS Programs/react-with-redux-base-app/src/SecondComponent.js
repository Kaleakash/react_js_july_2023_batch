import { useState } from "react";
import { useSelector } from "react-redux";

function SecondComponent() {
let [sname,setFname]=useState("Second Component name")
// useSelector is a hook part of react-redux allow to access global state variable in any component. 
let gname   = useSelector(gs=>gs.name);
let count = useSelector(gs=>gs.count);
let {id,name,salary} = useSelector(gs=>gs.emp);
    return(
        <div>
            <h2>Second Component</h2>
            <p>Local variable part of component{sname}</p>
            <p>Global variable part of store {gname}</p>
            <p>Count value in second component is {count}</p>
            <h2>Employee details from store is </h2>
            <p>Id is {id} name is {name} salary is {salary}</p>
        </div>
    )
}


export default SecondComponent;
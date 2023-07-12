import { useState } from "react";
import { useDispatch } from "react-redux";

function DynamicIncrement() {
let [n,setN]=useState(0);
let dispatch = useDispatch();
let passValueToStore = ()=> {
    console.log(n)
    dispatch({type:"DYNAMIC_INCREMENT",payload:n});
    setN(0);
}
    return(
        <div>
            <h2>Dynamic Increment</h2>
            <input type="number" name="n" value={n} onChange={(event)=>setN(event.target.value)}/>
            <input type="button" value="Dynamic Increment" onClick={passValueToStore}/>
        </div>
    )
}

export default DynamicIncrement;
import { useEffect, useState } from "react";
import Example from "./Example";

function ExampleWrapper(props) {
let [counter,setCounter]=useState(0)
let [n,setN]=useState(0)
useEffect(()=> {
    console.log("useEffect render in ExampleWrapper Component");
},[props]);
return(
    <div>
        <h2>Example Wrapper</h2>
        <p>Counter value is {counter} and N Value is {n}</p>
        <input type="button" value="Increment " onClick={()=> {
            setCounter(counter+1);
        }}/>
        <input type="button" value="Change n Value" onClick={()=>setN(n+1)} />
        <Example id={counter}></Example>
    </div>
)
}

export default ExampleWrapper;
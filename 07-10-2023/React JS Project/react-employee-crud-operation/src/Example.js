import { useEffect, useState } from "react";

function Example(props) {
let [id,setId]=useState(100);
let [name,setName]=useState("Ravi");
    useEffect(()=> {
        console.log("useEffect render in Example Component");
    },[props.id,id,name]);
let changeValue= ()=> {
   //setId(101)
    setName("Raju");
}
    return(
    <div>
        <h2>Example component using useEffect {props.id}</h2>
        <p>id is {id} name is {name}</p>
        <input type="button" value="Change Value"
        onClick={changeValue}/>
    </div>)
}


export default Example;

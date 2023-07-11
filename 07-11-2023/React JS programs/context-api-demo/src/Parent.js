import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child8 from "./Child8";
import { MyContext } from "./context";

function Parent() {
let [name,setName]=useState("Raj");
let [trainerName,setTrainerName]=useState("Akash");

return(
    
    <MyContext.Provider value={trainerName}>
        <div>
        <h2>Parent Component name is {name}</h2>
        <h2>Trainer name is {trainerName}</h2>
        <Child1></Child1>
        <Child8 name={name}></Child8>
        <Child2></Child2>
        </div>
    </MyContext.Provider>
    
)
}

export default Parent;
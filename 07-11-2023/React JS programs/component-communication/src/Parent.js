import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let[parentName,setParentName]=useState("Lex");
let [cName1,setC1name]=useState("");
let [cName2,setC2name]=useState("");
let child1RecevieValue=(data)=> {
    console.log(data);
    setC1name(data);
}
let child2RecevieValue=(data)=> {
    console.log(data);
    setC2name(data);
}
    return(
        <div style={{"backgroundColor":"pink"}}>
            <h2>This is Parent Component</h2>
            <p>Parent name in parent component is {parentName}</p>
            <p>Child1 name is parent component is {cName1}</p>
            <p>Child2 name is parent component is {cName2}</p>
            <Child1 pname={parentName} age="21" handleCallback={child1RecevieValue} child2={cName2}></Child1>
            <Child2 pname={parentName} age="32" handleCallback={child2RecevieValue} child1={cName1}></Child2>
            <h2>This is Parent component DOM content {parentName}</h2>
        </div>
    )
}

export default Parent;
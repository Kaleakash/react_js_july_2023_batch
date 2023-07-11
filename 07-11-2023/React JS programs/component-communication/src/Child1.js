import { useState } from "react";

function Child1(props) {
let [child1Name,setChild1Name]=useState("Ajay");

    return(
        <div style={{"backgroundColor":"yellow"}}> 
            <h2>This is Child1 component</h2>
            <p>Child1 name is child1 component is {child1Name}</p>
            <p>{props.handleCallback(child1Name)}</p>
            <p>Parent Name in Child1 component is {props.pname} and age is {props.age}</p>
            <p>Child2 name in Child1 component is {props.child2}</p>
        </div>
    )
}

export default Child1;
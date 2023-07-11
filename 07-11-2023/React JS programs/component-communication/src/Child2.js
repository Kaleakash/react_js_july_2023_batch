import { useState } from "react";

function Child2({pname,age,handleCallback,child1}) {
let [child2Name,setChild2Name]=useState("Vijay");
    return(
        <div style={{"backgroundColor":"orange"}}>
            <h2>This is Child2 component</h2>
            <p>Parent name in Child2 component is {pname} and age is {age}</p>
            <p>Child2 name in Child2 component is {child2Name}</p>
            <p>{handleCallback(child2Name)}</p>
            <p>Child1 name in child2 component is {child1}</p>
        </div>
    )
}

export default Child2;
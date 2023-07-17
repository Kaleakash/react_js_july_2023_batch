import { useState } from "react";

function Parent() {
let [n,setN]=useState(0);
    return(
        <div>
            <span data-testid="result">{n}</span>
            <p data-testid="p1">This is parent component first para</p>
            <p data-testid="p2">This is parent component second para</p>
            <p data-testid="p3">This is parent component third para</p>
            <input type="button" value="Change value" onClick={()=>setN(10)} data-testid="b1"/>
        </div>
    )
}

export default Parent;
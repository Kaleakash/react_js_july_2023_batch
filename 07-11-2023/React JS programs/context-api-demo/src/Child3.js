import { useContext } from "react";
import Child4 from "./Child4";
import { MyContext } from "./context";

function Child3(props) {

// useContext another hook which help to access the data from context reference. 
let result = useContext(MyContext);

    return(
        <div>
            <h2>Child3 Component</h2>
            <p>Trainer name is child3 component is {result}</p>
            <Child4 name={props.name}></Child4>
           
        </div>
    )
    }
    
    export default Child3;
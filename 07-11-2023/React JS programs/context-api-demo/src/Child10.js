import { useContext } from "react";
import { MyContext } from "./context";

function Child10() {

// useContext another hook which help to access the data from context reference. 
let result = useContext(MyContext);

    return(
        <div>
            <h2>Child10 Component</h2>
            <p>Trainer name is child10 component is {result}</p>
        </div>
    )
    }
    
    export default Child10;
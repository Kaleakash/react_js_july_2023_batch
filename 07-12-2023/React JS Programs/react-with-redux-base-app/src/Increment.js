import { useDispatch } from "react-redux";
import DynamicIncrement from "./DynamicIncrement";

function Increment() {
// it is a hook provided by react which help to call reducer function 
// while calling we can pass action as well as payload.
// useDispatch is use dispatch the action to reducer. 
let dispatch = useDispatch();   
return(
    <div>
        <h2>Increment Component</h2>
        <input type="button" value="Increment"
        onClick={()=>dispatch({type:"INCREMENT"})}/>
        <br/>
        <DynamicIncrement></DynamicIncrement>
    </div>
)
}

export default Increment;
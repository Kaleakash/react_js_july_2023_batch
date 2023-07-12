import { useDispatch } from "react-redux";
import DynamicDecrement from "./DynamicDecrement";

function Decrement() {
// it is a hook provided by react which help to call reducer function 
// while calling we can pass action as well as payload.
// useDispatch is use dispatch the action to reducer. 
let dispatch = useDispatch();   
return(
    <div>
        <h2>Decrement Component</h2>
        <input type="button" value="Decrement"
        onClick={()=>dispatch({type:"DECREMENT"})}/>
        <br/>
        <DynamicDecrement></DynamicDecrement>
    </div>
)
}

export default Decrement;
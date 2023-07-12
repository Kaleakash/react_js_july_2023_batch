import { useContext } from "react";
import { MyContext } from "./Context";

function DisplayUser() {

let {users}=useContext(MyContext);

let user = users.map(u=><li>Name is {u.name} Age is {u.age}</li>)
    return(
        <div>
            <h2>Display User</h2>
            <ul>
                {user}
            </ul>
        </div>
    )
}

export default DisplayUser;
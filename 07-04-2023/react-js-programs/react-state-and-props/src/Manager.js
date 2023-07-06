import { useState } from "react"

function Manager(props){
//let name = useState("Neena");
let [age,setAge]=useState(23);
let [name,setName]=useState("Neena");
function changeName() {
    setName("Neena Kumari")
    setAge(35)
}
    return(
        <div>
            <h2>Function style component</h2>
            <p>Name is {name} Age is {age} 
            Number of Employee working under him {props.numberOfEmp}
            Working in technology as {props.technology}</p>
        <input type="button" value="Change Name"
        onClick={changeName}/>
        </div>
    )
}

export default Manager;



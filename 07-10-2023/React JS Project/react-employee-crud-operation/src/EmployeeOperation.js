import axios from "axios";
import { useEffect, useState } from "react";
function EmployeeOperation() {
let [id,setId]=useState(0);
let [name,setName]=useState("");
let [salary,setSalary]=useState(0.0);
let [employees,setEmployees]=useState([]);
let [submitButton,setSubmitButton]=useState("Store Employee")
let [result,setResult]=useState();
useEffect(()=> {            // mount and update 
    console.log("mount and update")
 loadEmployeeDetails();     
 return ()=>console.log("Unmount"); // unmount closing the resource  
},[result]);

let loadEmployeeDetails= async()=> {
    let result = await axios.get("http://localhost:3000/employees");
    setEmployees(result.data);
    //console.log(result.data);
    // let response = await fetch("http://localhost:3000/employees");
    // let result = await response.json();
    // console.log(result);
}
let storeEmployee = async (event)=> {
    event.preventDefault();
    let emp = {"id":id,"name":name,"salary":salary};
    if(submitButton=="Store Employee"){
    // in post method 1st parameter url and 2nd parameter json data. 
    let result = await axios.post("http://localhost:3000/employees",emp);
    setResult(result);
    //console.log(result); 
    //setEmployees(result.data);
    }else {
        let result = await axios.put("http://localhost:3000/employees/"+id,emp);
        //console.log(result);
        setResult(result);
    }
    setSubmitButton("Store Employee");
    reset();
    //loadEmployeeDetails();
}
let reset = ()=> {
    setId(0);
    setName("");
    setSalary(0.0)
}
let deleteEmployeeRecord = async (event,id)=> {
    //console.log(id);
    let result = await axios.delete("http://localhost:3000/employees/"+id)
    setResult(result);
    //console.log(result);
    //loadEmployeeDetails();
}
let updateEmployeeRecord = async (event,e)=> {
    //console.log(e);
    setId(e.id);
    setName(e.name);
    setSalary(e.salary);
    setSubmitButton("Update Employee")
}
let employeeRecord = employees.map(e=> 
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.salary}</td>
            <td> 
                <a onClick={(event)=>{
                        deleteEmployeeRecord(event,e.id)
                }}>
                <img src="data:image/jpeg;base64,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"
                    width="50px" height="50px"/>   
                </a>
            </td>
            <td>
            <a onClick={(event)=>{
                        updateEmployeeRecord(event,e)
                }}>
                <img src="data:image/jpeg;base64,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"
                    width="50px" height="50px"/>   
                </a>
            </td>
        </tr>
    )
    return(
    <div>
        <h3>Employee Component</h3>
        <hr/>
        <h2>Add Employe Details</h2>
        <form onSubmit={storeEmployee}>
            <label>Id</label>
            <input type="number" name="id" value={id} onChange={(event)=>setId(event.target.value)}/><br/>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={(event)=>setName(event.target.value)}/><br/>
            <label>Salary</label>
            <input type="number" name="salary" value={salary} onChange={(event)=>setSalary(event.target.value)}/><br/>
            <input type="submit" value={submitButton}/>
            <input type="reset" value="reset" onClick={reset}/>
        </form>
        <hr/>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Delete Rec</th>
                <th>Update Rec</th>
            </tr>
            </thead>
            <tbody>
                {employeeRecord}
            </tbody>
        </table>
    </div>)

}
export default EmployeeOperation;
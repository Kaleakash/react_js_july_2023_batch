import { useState } from "react";

function Employee() {
    let [id,setId]=useState(100);
    let [name,setName]=useState("Lex");
    let [salary,setSalary]=useState(18000.50);
    let [technologies,setTechnologies]=useState(["Java","Python","HTML","CSS"]);

    let tech = technologies.map(data=><p><b>{data}</b></p>)
    return(
        <div>
            <h2>Employee details</h2>
            <p>Id is {id} Name is {name} Salary is {salary}</p>
            <p>{technologies}</p>
            <div>
                {tech}
            </div>
        </div>
    )
}

export default Employee;
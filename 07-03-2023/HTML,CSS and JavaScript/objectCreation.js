// literat style object createion 
let emp = {id:100,name:"Lex",age:21};
document.write("<br/> Literal style object creation")
document.write("<br/> Id is "+emp.id);
document.write("<br/> Name is "+emp.name);
document.write("<br/> Age is "+emp.age);

// function style object creation 
// function Employee() {
//     this.id = 101;
//     this.name="Steven";
//     this.age = 26;
//     this.displayEmpInfo=function() {
//         document.write("<br> Employee details")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// //Employee();
// let emp1 = new Employee();
// let emp2 = new Employee();
// document.write("<br/> Object creation in function style")
// // document.write("<br> id is "+emp1.id);
// // document.write("<br> name is "+emp1.name);
// // document.write("<br> age is "+emp1.age);
// emp1.displayEmpInfo();
// emp2.displayEmpInfo();

// object creation with parameter 
// function Employee(id,name,age) {
//     this.id = id;
//     this.name=name;
//     this.age = age;
//     this.displayEmpInfo=function() {
//         document.write("<br> Employee details")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// //Employee();
// let emp1 = new Employee(1,"Ravi",34);
// let emp2 = new Employee(2,"Neena",36);
// document.write("<br/> Object creation in function style")
// // document.write("<br> id is "+emp1.id);
// // document.write("<br> name is "+emp1.name);
// // document.write("<br> age is "+emp1.age);
// emp1.displayEmpInfo();
// emp2.displayEmpInfo();


// function style object creation 
// function Employee() {
//     this.id = 101;
//     this.name="Steven";
//     this.age = 26;
//     this.displayEmpInfo=function() {
//         document.write("<br> Employee details")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// //Employee();
// let emp1 = new Employee();
// let emp2 = new Employee();


// object creation in class style 
// class Employee {
//     id=100;
//     name="Lex";
//     age=21;
//     display() {
//         document.write("<br/>Employee details in class style<br/>");
//         document.write("<br> id is "+this.id);
//         document.write("<br> name is "+this.name);
//         document.write("<br> age is "+this.age);
//     }
// }
// let emp1 = new Employee();
// let emp2 = new Employee();
// emp1.display();
// emp2.display();

// // constructor example 
// class Employee {
//     constructor() {
//         document.write("<br/> object created...")
//     }

//     display() {
//         document.write("<br/> employee class function")
//     }
// }
// let emp1 = new Employee();
// emp1.display();


// object creation with parameter 
// function Employee(id,name,age) {
//     this.id = id;
//     this.name=name;
//     this.age = age;
//     this.displayEmpInfo=function() {
//         document.write("<br> Employee details")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// //Employee();
// let emp1 = new Employee(1,"Ravi",34);
// let emp2 = new Employee(2,"Neena",36);
// document.write("<br/> Object creation in function style")
// // document.write("<br> id is "+emp1.id);
// // document.write("<br> name is "+emp1.name);
// // document.write("<br> age is "+emp1.age);
// emp1.displayEmpInfo();
// emp2.displayEmpInfo();

// In ES6 object creation with parameter constructor 
class Employee{
        constructor(id,name,age){
            this.id = id;
            this.name = name;
            this.age = age;
        }
        display() {
            document.write("<br/> Employee details");
            document.write("<br/> id is "+this.id);
            document.write("<br/> name is "+this.name);
            document.write("<br/> age is "+this.age);
        }
}
let emp1 = new Employee(1,"Lex",21);
let emp2 = new Employee(2,"Neena",34)
emp1.display();
emp2.display();






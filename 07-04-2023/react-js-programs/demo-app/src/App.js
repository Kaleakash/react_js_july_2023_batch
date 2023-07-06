
// function Employee() {
//   let id=100;
//   let name = "Lex";
//   let age = 21;   // local variables 
//   return id+" "+name+" "+age;

import react from "react";
import Customer from "./Customer";
import Product from "./Product";
import Account from "./Accout";

// }

// function WithJSX(){
//   return <div>This component created using JSX</div>
// }
// function WithoutJSX() {
//     react.createElement()
//   return react.createElement("div",{},"This component created without JSX");
// }

function WithJSX(){
  return<div><p>This description for JSX</p></div>
}
function WithoutJSX() {
  var ptag = react.createElement("p",{},"This description for without JSX")
  return react.createElement("div",{},ptag);
}

function Employee() {
  let id=100;
  let name = "Lex";
  let age = 21;   // local variables 
  return(
    <div>
      <h2>Employee details</h2>
      <p>Id is {id} Name is {name} Age is {age}</p>
    </div>
  )

}
function Header() {
  return<div>This is Header Component</div>
}

function Footer() {
  return <div>This is Footer Component</div>
}

function App() {
  return(
    <>
     <Header></Header>
      <h2>Welcome to React JS Project</h2>
      <Employee></Employee>
      <WithJSX></WithJSX>
      <WithoutJSX></WithoutJSX>
      <Customer></Customer>
      <Product></Product>
      <Account></Account>
      <Footer></Footer>
    </>
  )
}

export default App;

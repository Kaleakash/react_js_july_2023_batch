import logo from './logo.svg';
import './App.css';
import React from 'react';
import Employee from './Employee';
import Product from './Product';
function WithoutJSX() {
  return React.createElement("div",{},"This code without JSX");
}
function WithJSX() {
  return <div>This code with JSX</div>
}
function Message() {
  return(
    <div>
      <h2>Welcome to React JS</h2>
      <p>Today 3rd day training for React JS</p>
    </div>
  )
}
function Operation() {
  return(
    <div>
      <h2>Maths Operation Component</h2>
      <p>Addition of two number is {10+20}</p>
      <p>Sub of two number is {100-20}</p>
      <p>Mul of two number is {10*20}</p>
      <p>Div of two number is {100/20}</p>
    </div>
  )
}
let Students = (
  <ul>
    <li>Steven</li>
    <li>Lex</li>
    <li>Mahesh</li>
    <li>Neena</li>
  </ul>
)
function StudentInfo() {
    return Students;
}
function Hi() {
  return <div>Hi</div>
}
function Hello() {
  return <div>Hello</div>
}
function ConditionalJSX() {
  return(
    <div>
        {!true?<Hi></Hi>:<Hello></Hello>}
    </div>
  )
}
function App() {
  // JavaScript commments 
  /*

  */
  return (
    <div className="App">
      <h2>JSX Concept</h2>
       {/* <WithoutJSX></WithoutJSX>
      <WithJSX></WithJSX>
      <Message></Message>
      <Operation></Operation>
      <StudentInfo></StudentInfo>
      <ConditionalJSX></ConditionalJSX>  */}
      {/* <Employee></Employee> */}
      <Product></Product>      
    </div>
  );
}

export default App;

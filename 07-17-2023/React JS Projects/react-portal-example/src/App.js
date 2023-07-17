import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const PortalModel = ({message,isModelOpen,onClose})=> {

if(!isModelOpen){
  return null;
}else {
  return ReactDOM.createPortal(
    <div className='model'>
      <p>message</p>
      <button onClick={onClose}>X</button>
    </div>,
    document.getElementById("portal-root")
  )
    // return(
    // <div className='model'>
    //   <p>message</p>
    //   <button onClick={onClose}>X</button>
    // </div>)
}
}

function App() {
let [modelOpen,setModelOpen]=useState(false);
  return (
    <div className="App">
      <h2>React Actula DOM Content</h2>
      <input type="button" value="Click Here"
      onClick={()=>setModelOpen(true)}/>
      <PortalModel 
      message="Hello"
      isModelOpen={modelOpen}
      onClose={()=>setModelOpen(false)}></PortalModel>
    </div>
  );
}

export default App;

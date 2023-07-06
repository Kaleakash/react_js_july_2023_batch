import logo from './logo.svg';
import './App.css';
import Developer from './Developer';
import Manager from './Manager';
import { useState } from 'react';

function App() {
let [techName,setTechName]=useState("Python");
  return (
    <div className="App">
      <h2>State and props concept</h2>
      <Developer></Developer>
      <Manager numberOfEmp="10" technology={techName}></Manager>
    </div>
  );
}

export default App;

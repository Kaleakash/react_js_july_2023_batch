import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';
import { MyContext } from './Context';
import { useState } from 'react';

function App() {
let [users,setUsers]=useState([{name:"Lex",age:21}])

let addUser = (user)=> {
  setUsers([...users,user]);  // for users state variable added new user. 
  console.log("Event fired in App function")
}

  return (
    <MyContext.Provider value={{users,addUser}}>
    
    <div className="App">
      <h2>Context API Operation</h2>
      <AddUser></AddUser>
      <DisplayUser></DisplayUser>
    </div>

    </MyContext.Provider>
  );
}

export default App;

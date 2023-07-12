import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import Increment from './Increment';
import Decrement from './Decrement';

function App() {
  return (
    <div className="App">
     <h2>React with Redux State Management Tool</h2>
     <Increment></Increment>
     <Decrement></Decrement>
     <FirstComponent></FirstComponent>
     <SecondComponent></SecondComponent>
     
    </div>
  );
}

export default App;

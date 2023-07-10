import logo from './logo.svg';
import './App.css';
import EmployeeOperation from './EmployeeOperation';
import Example from './Example';
import ExampleWrapper from './ExampleWrapper';

function App() {
  return (
    <div className="App">
      <h2>Employee CRUD Operation using axios third party library</h2>
      <EmployeeOperation></EmployeeOperation>
      {/* <ExampleWrapper></ExampleWrapper> */}
    </div>
  );
}

export default App;

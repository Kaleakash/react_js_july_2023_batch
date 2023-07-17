import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link,Switch as myswitch} from 'react-router-dom'
import { AboutUs } from './AboutUs';
import { ContactUs } from './ContactUs';
import Landing from './Landing';
import Login from './Login';
import Dashboard from './Dashboard';
import { NotFound } from './NotFound';
import { Sub1 } from './sub1';
import { Sub2 } from './sub2';
import { Sub3 } from './sub3';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <h2>React Routing Example</h2>
    <nav className='nav'>
     <Link to="landing">Landing</Link> |
      <Link to="aboutus">AboutUs</Link> |
      <Link to="contactus">Contact Us</Link> |
      <Link to="login">Login</Link>
    </nav>
<hr/>
      <div>
          <myswitch>
          <Routes>
          <Route exact path='/' element={<Landing/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='sub1' element={<Sub1/>}></Route>
            <Route path='sub2' element={<Sub2/>}></Route>
            <Route path='sub3' element={<Sub3/>}></Route>
            <Route path='product/:pid' element={<Product/>}></Route>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
          </Routes>
          </myswitch>
       
      </div>
    </div>
  );
}

export default App;


import {Link,Outlet} from 'react-router-dom';
import { Products } from './produtsDetails';

function Dashboard() {

let productLink  = Products.map(p=>
    <Link to={'product/'+p.pid}>Product{p.pid}</Link>
)
    return(
        <div>
            <h2>Welcome to Home page</h2>
            <nav className='nav'>
                <Link to="sub1">Sub1</Link> |
                <Link to="sub2">Sub2</Link> |
                <Link to="sub3">Sub3</Link> |
                {productLink}
                </nav>
                <div>
                    <Outlet></Outlet>
                </div>
        </div>
    )
}

export default Dashboard;
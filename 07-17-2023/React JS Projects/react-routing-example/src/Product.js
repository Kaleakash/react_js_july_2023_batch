import {useParams} from 'react-router-dom';
import { Products } from './produtsDetails';
function Product() {

let {pid}=useParams();      // use to receive path param ie 1,2,3,4
let data  = useParams();
let product = Products.find(p=>p.pid == pid);
console.log(data);
    return(
        <div>
            
            <h2>Product Details</h2>
            <p>Pid is {product.pid} PName is {product.pname} price {product.price}</p>
        </div>
    )
}

export default Product;
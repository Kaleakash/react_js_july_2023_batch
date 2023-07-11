
let Product = ({product})=><li key={product.pid}>Pid is {product.pid} PName is {product.pname} and Price {product.price}</li>

function DisplayProduct({productsInfo}) {

let product = productsInfo.map(p=>
    <Product product={p}></Product>
    )
    return(
        <div>
          <h2>Display All Products</h2> 
          <ul>
            {product}
          </ul> 
        </div>
    )
}

export default DisplayProduct;
import { useState } from "react";
import DisplayProduct from "./DisplayProduct";

function AddProduct() {
let [product,setProduct]=useState({pid:0,pname:"",price:0.0});
let [products,setProducts]=useState([
    {"pid":1,"pname":"TV","price":56000},
    {"pid":2,"pname":"Computer","price":45000}
]);
let reset=()=> {
    setProduct({pid:0,pname:"",price:0.0});
}
let storeProduct =(event)=> {
    event.preventDefault();
    console.log(product);
    let result = products.find(p=>p.pid==product.pid);
    if(result==undefined){
           setProducts(previousProduct=>[...previousProduct,product]);     // append the new product 
        alert("produt details stored")
    }else {
        alert("product id must be unique")
    }
    reset();
}
    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={storeProduct}>
                <label>PId</label>
                <input type="number" name="product.pid" value={product.pid}
                onChange={(event)=> 
                    setProduct(p=>{return {...p,pid:event.target.value}})
                }/><br/>
                <label>PName</label>
                <input type="text" name="product.pname" value={product.name}
                onChange={(event)=> 
                    setProduct(p=>{
                        return {...p,pname:event.target.value}
                    })
                }
                /><br/>
                <label>Price</label>
                <input type="number" name="product.price" value={product.price}
               onChange={(event)=> 
                setProduct(p=>{
                    return {...p,price:event.target.value}
                })
            }/><br/>
                <input type="submit" value="Store Product"/>
                <input type="reset" value="reset" onClick={reset}/>
            </form>

            <DisplayProduct productsInfo={products}></DisplayProduct>
        </div>
    )
}


export default AddProduct;
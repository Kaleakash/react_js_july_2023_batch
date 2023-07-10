import { useState } from "react";
//import './App.css';
function Product() {

let [products,setProduct]=useState([]);
// let loadFakeData = async ()=> {
//     let response = await fetch("https://dummyjson.com/products");
//     let result = await response.json();
//     console.log(result);
// }
let product = products.map(p=>
<div style={{"borderWidth":"3px","borderColor":"red","borderStyle":"solid","width":"500px","display":"inline-block","margin":"5px"}}>
    <img src={p.thumbnail} width="100px" height="100px"/>
    <span className="SpanClass">
        Title {p.title}
        Descritpion {p.description}
        Price {p.price}
    </span>
</div>)
async function loadFakeData() {
    try{
    let response = await fetch("https://dummyjson.com/products");
    let result = await response.json();
   console.log(result.products);
   setProduct(result.products);
   //console.log(products.length);
    }catch(error){
        console.log(error);
    }
}
    return(
    <div>
        <h2>Product Details</h2>
        <input type="button" value="Load Data" onClick={loadFakeData}/>
        <br/>
        {product}
    </div>)
}


export default Product;
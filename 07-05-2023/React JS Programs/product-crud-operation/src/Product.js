import { useState } from "react";
function Product(){
    let [pid,setPid]=useState(0);
    let [pname,setPName]=useState("");
    let [price,setPrice]=useState(0.0);
    let [url,setUrl]=useState("");
    let [products,setProducts]=useState([]);
    let [submitButton,setSubmitButton]=useState("Store Product");
    let storeProduct = (event)=> {
        event.preventDefault();
        let product = {"pid":pid,"pname":pname,"price":price,"url":url}
        //console.log(product);
        
        if(submitButton=="Store Product"){
     
        let result = products.find(p=>p.pid==product.pid );
        if(result==undefined){   
            // setProducts(previousProduct=> {
            //     return [...previousProduct,product];
            // })
            //setProducts(previousProduct=>[...previousProduct,product]);
            setProducts([...products,product]);
            //setProducts(data=>[...data, product]);
        }else {
            alert("Pid must be unique");
        }
    }else {
        //alert("update coding..")
        let tempProduct = [...products];
        console.log(product);
        let index = tempProduct.findIndex(p=>p.pid==product.pid);
        tempProduct.splice(index,1,product);
        setProducts(tempProduct);
        setSubmitButton("Store Product");
    }

        reset();
    }

    let reset= (event)=> {
        setPid(0);
        setPName("");
        setPrice(0.0)
        setUrl("");
    }
    let deleteProduct = (event,index)=> {
            alert("Delete Product "+pid);
            let tempProduct = [...products];
            tempProduct.splice(index,1);
            setProducts(tempProduct);   // replace old product by new product 
    }
    let updateProduct = (event,product)=> {
        setSubmitButton("Update Record");
        console.log(product);
        setPid(product.pid);
        setPName(product.pname);
        setPrice(product.price);
        setUrl(product.url);
    }
    let productRecord = products.map((p,index)=> 
        <tr key={index}>
            <td>{p.pid}</td>
            <td>{p.pname}</td>
            <td>{p.price}</td>
            <td><img src={p.url} width="100px" height="100px"/></td>
            <td><input type="button" value="Delete Product" onClick={(e)=>deleteProduct(e,index)}/> </td>
            <td><input type="button" value="Update Product" onClick={(e)=>updateProduct(e,p)}/></td>
        </tr>    
    )
    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={storeProduct}>
                <label>PId</label>
                <input type="number" name="pid" value={pid} onChange={(e)=>setPid(e.target.value)}/><br/>
                <label>PName</label>
                <input type="text" name="pname" value={pname} onChange={(e)=>setPName(e.target.value)}/><br/>
                <label>Price</label>
                <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
                <label>URL</label>
                <input type="url" name="url" value={url} onChange={(e)=>setUrl(e.target.value)}/><br/>
                <input type="submit" value={submitButton}/>
                <input type="reset" value="reset"/>
            </form>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>Pname</th>
                        <th>Price</th>
                        <th>URL</th>
                        <th>Delete Product</th>
                        <th>Update Product</th>
                    </tr>
                </thead>
                <tbody>
                    {productRecord}
                </tbody>
            </table>
        </div>
    )
}
export default Product;
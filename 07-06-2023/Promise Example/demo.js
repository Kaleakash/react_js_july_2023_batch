async function promiseFun() {
    // let obj = new Promise((resolve,reject)=> {
    //     reject("Error generated"),
    //     resolve("promise resolved")
       
    // })

    // obj.then(data=>console.log("Then "+data)).catch(error=>console.log("catch"+error));
    // console.log("Hi");
    // console.log("Hello");
    // ES5 as well as Es6 
    // fetch("https://dummyjson.com/products").then(response=>response.json()).then(result=>console.log(result.products)).
    // catch(error=>console.log("catch"+error));
    //    console.log("Hi");
    // console.log("Hello");   

    // ES7 they intro two asyn and await 
    try{
   let response = await fetch("https://dummyjson.com/products");
   let result = await response.json()
   console.log(result); 
    }catch(ex){
        console.log(ex);
    }
}
let intialState = {
    name:"Akash",
    count:10,
    emp:{id:100,name:"Ravi",salary:24000},
    products:[]
}

function reducer(state = intialState,action){
    // we do change on state varaible base upon action 
    console.log(action);
    if(action.type=="INCREMENT"){
        //1st parameter whole state variable 
        // 2nd parameter count,
        //3rd parameter need to update 
        return {...state,count:state.count+1}
    }
    if(action.type=="DECREMENT"){
        //1st parameter whole state variable 
        // 2nd parameter count,
        //3rd parameter need to update 
        return {...state,count:state.count-1}
    }
    if(action.type=="DYNAMIC_INCREMENT"){
        //return {...state,count:state.count+parseInt(action.payload)}
        return {...state,count:state.count+eval(action.payload)}
    }
    if(action.type=="DYNAMIC_DECREMENT"){
        //return {...state,count:state.count+parseInt(action.payload)}
        return {...state,count:state.count-eval(action.payload)}
    }
    return state;
}


export default reducer;

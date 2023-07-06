import React from "react";

class Developer extends React.Component{

    constructor(props){
        super(props);
        this.state = {name:"Lex",age:21};
        this.changeName= this.changeName.bind(this);
    }
    
    changeName() {
        this.setState({name:"lex kumar",age:23})
    }
    render() {
        return(
            <div>
                <h2>Class style component</h2>
                <p>Name is {this.state.name} AGe is {this.state.age}</p>
                <input type="button" value="Change name"
                onClick={this.changeName}/>
            </div>
        )
    }
}

export default Developer;
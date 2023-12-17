import React from "react";

export default class Halfstr extends React.Component{
    constructor(){
        super()
        this.state={half:""}
    }
    handler=(event)=>{
        let s= event.target.value
        let shalf=s.substr(0,s.length/2).toUpperCase()
        this.setState({half:shalf})
    }
    render(){
        return(
            <>
            <input type="text" onBlur={this.handler}/>
            <p>Half String: {this.state.half}</p>
            </>
        )
    }
}
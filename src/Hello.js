import React from "react"
export default class Hello extends React.Component{

    render(){
         
        return(
            <>
            <div>
                <p>hello {this.props.name}</p>
            </div>
            </>
        )
    }
}
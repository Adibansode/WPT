import React from "react";

export default class Case extends React.Component{
    constructor(){
        super();
        this.state = {str:"",rev:"",original:"" }
    }
    

    rhandler=(event)=>{
        let ischecked=event.target.value
        if(ischecked){
            let s=this.state.str
            let rev=""
            for(let i=s.length-1;i>=0;i--){
                rev+=s.charAt(i);
            }
            console.log(rev)
            this.setState({str:rev,rev:rev})
        }
    }

    radiohandler=(event)=>{
        switch(event.target.id){
            case "uc":
                let s=this.state.str.toUpperCase()
                this.setState({str:s})

            break
            case "lc":
                let lc=this.state.str.toLowerCase()
                this.setState({str:lc})

            break
            case "tc":
                let tc=this.state.str.charAt(0).toUpperCase()+this.state.str.substring(1).toLowerCase()
            
                this.setState({str:tc})



            break
        }
    }

    render(){
        return(

            <>

            Enter the string: <input type="text" name="" id="" onBlur={(event)=>{
                console.log(event.target.value)
                this.setState({str:event.target.value,original:event.target.value})

            }}/><br />
            REV: <input type="checkbox" name="" onClick={this.rhandler} /><br />

            UC <input type="radio" name="a" id="uc" onClick={this.radiohandler} /><br />
            LC <input type="radio" name="a" id="lc" onClick={this.radiohandler} /><br />
            TC <input type="radio" name="a" id="tc" onClick={this.radiohandler} /><br />

            <p>{this.state.str} </p>

            </>
        )
    }
}
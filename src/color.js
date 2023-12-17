import React from "react";
import { useState } from "react"

export default class Color extends React.Component {

    constructor() {
        super();
        this.state = { col: "" }
    }
    color = (event) => {
        let val = event.target.value
        console.log(val)
        this.setState({ col: val })
    }
    render() {
        return (
            <>
                <input type="color" name="color" id="col" onChange={this.color} />
                <div >
                    <p style={{ color: this.state.col }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, pariatur?:</p>
                </div>
            </>
        )
    }
}
import { useState } from "react"

export default function Sayhi(){

    let [msg,setmsg]=useState("")
    function handle(){
        setmsg("hii")
    }
    return(
        <>
        <button onClick={handle}>Click me!</button>
        <p>
{msg}
        </p>
        </>
    )
}
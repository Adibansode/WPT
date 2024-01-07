import React from "react"
import { useNavigate } from "react-router-dom"
export default function Login() {




  

    return (
        <>
            <h1>Login Here</h1>
            <div align="center">
                <input type="text" placeholder="enter the email" /><br></br>
                <input type="password" placeholder="enter the Password" /><br>
                </br>
                <button  onClick={(()=>{
                     console.log("adsbj");
               
    })}>Login</button>

            </div>
        </>
    )
}

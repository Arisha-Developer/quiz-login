import { Input } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

function SignUp(){
const navigation=useNavigate()
return(
    <div className="app2">
<h1 className="log-head mb-4 mt-2">SIGN UP</h1>
<h5>Username:</h5>
<Input label="outlined" variant="outlined"></Input>
<h5 className="mt-3">Email:</h5>
<Input label="outlined" variant="outlined"></Input>
<h5 className="mt-3">Password:</h5>
<Input label="outlined" variant="outlined"></Input>
<div>
<button className="btn btn-dark mt-4 " onClick={()=>{navigation("/Home")}}>Submit</button>
</div>
    </div>
)
}
export default SignUp
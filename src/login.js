import { Input } from "@mui/material";
// import { Button } from "bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigation = useNavigate();
  return (
    <div className="app1">
      <h1 className="log-head mb-5">Login Page</h1>
      <h4>Email:</h4>
      <Input  label="Outlined" variant="outlined" type="email" required></Input>
      <h4>Password:</h4>
      <Input  label="Outlined" variant="outlined"type="password"required></Input>
      {/* <Button>Submit</Button> */}
      <div>

      <button className="btn btn-dark mt-4 " onClick={() => {navigation("/Signup")}}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
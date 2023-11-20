import React, { useState } from "react";
import video from '../assests/video.mp4';
import { Button, Paper, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const LoginPage = () => {                       
  //usestate is used to update the state of the component
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!password.trim()) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    //above four conditions checks the error.
    //instead of link tag using navigate.
    if (name.trim() && password.trim()) {
      navigate("/dashboard");
      console.log("Submitted:", name, password);
    }
  }
  
  return (
    
    <div className="divi">
      <video src={video} autoPlay loop muted />
      <center>
        <br></br>
        
        <div className="container">
          <h1 style={{ color: "whitesmoke" }}>LOGIN</h1>
          
          <Paper elevation={10} square className="div" style={{ backgroundColor: "silver" }}>
            <br></br>
            <div className="logo-container">
              <img src="https://as2.ftcdn.net/v2/jpg/01/68/67/29/1000_F_168672905_hxZBOpp8unSVPxT8XqZN6o6S8KTgRmJz.jpg" className="logo-img" />
            </div>
            <center>
              <br></br>
              <TextField
                label="Username"
                id="name"
                value={name}
                error={nameError}
                onChange={(event) => {
                  setName(event.target.value);
                  setNameError(false);
                }}
                helperText={nameError ? "Please enter your username" : ""}
              />
              <br>
              </br>
              <pre>
              </pre>
              <br></br>
              <TextField
                label="Password"
                id="password"
                type="password"
                value={password}
                error={passwordError}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError(false);
                }}
                helperText={passwordError ? "Please enter your password" : ""}
              />
              <br>
              </br>
              <pre>
              </pre>
              <br>
              </br>
              <Button type="Submit" onClick={handleSubmit}>Login</Button>
              <br></br>
              <div className="links">
                <a href="#" style={{ color: "red" }}>Forgot Password?</a>
              </div>
            </center>
          </Paper>
        </div>
      </center>
    </div>
  );
};
export default LoginPage;

import React, { useState } from "react";
import videos from '../assests/videos.mp4';
import { Button, Paper, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {                       
  //usestate is used to update the state of the component
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState('');
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
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
    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    //above four conditions checks the error.
    //instead of link tag using navigate.
    if (name.trim() && password.trim()&&email.trim()) {
      navigate("/login");
      console.log("Submitted:", name, password,email);
    }
  }
  return (
    <div className="divin">
      <video src={videos} autoPlay loop muted />
      <center>
        <br></br>
        
        <div className="containers">
          <h1 style={{ color: "whitesmoke" }}>SIGNUP</h1>
          
          <Paper elevation={10} square className="divn" style={{ backgroundColor: "silver" }}>
            <br></br>
            <div className="logo-containers">
              <img src="https://as2.ftcdn.net/v2/jpg/01/68/67/29/1000_F_168672905_hxZBOpp8unSVPxT8XqZN6o6S8KTgRmJz.jpg" className="logo-imgs" />
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
                label="Email"
                id="email"
                type="email"
                value={email}
                error={emailError}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError(false);
                }}
                helperText={emailError ? "Please enter your Email" : ""}
              />
              <br>
              </br>
              <pre>
              </pre>
              <br>
              </br>
              
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
               <TextField
                label="Confirm Password"
                id="password"
                type="password"
                value={password}
                error={passwordError}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError(false);
                }}
                helperText={passwordError ? "Please enter your confirm password" : ""}
                />
                <br>
               </br>
               <pre>
               </pre>
               <br>
               </br>
              <Button type="Submit" onClick={handleSubmit}>Signup</Button>
              <br></br>
              <div className="link">
                <a href="#" style={{ color: "red" }}>Forgot Password?</a>
              </div>
            </center>
          </Paper>
        </div>
      </center>
    </div>
  );
};
export default Signup;

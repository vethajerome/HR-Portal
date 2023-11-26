import React, { useEffect, useState } from "react";
import videos from "../assests/videos.mp4";
import { Button, Paper, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSignup from "./Hook";

const SignupPage = () => {
  const signIn = useSignup();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordError1, setPasswordError1] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Email regex pattern for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password regex pattern for basic validation (at least 8 characters)
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (password !== password1) {
      setPasswordError1(true);
    } else {
      setPasswordError1(false);
    }

    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (name.trim() && validatePassword(password) && password === password1 && validateEmail(email)) {
      // Perform signup logic here
      signIn.addUser();
      navigate("/login");
      console.log("Submitted:", name, password, email, password1);
    }
  };

  return (
    <div className="divin">
      <video src={videos} autoPlay loop muted />
      <center>
        <br></br>

        <div className="containers">
          <h1 style={{ color: "whitesmoke" }}>SIGNUP</h1>

          <Paper
            elevation={10}
            square
            className="divn"
            style={{ backgroundColor: "silver" }}
          >
  
            <br></br>
            <div className="logo-containers">
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/68/67/29/1000_F_168672905_hxZBOpp8unSVPxT8XqZN6o6S8KTgRmJz.jpg"
                className="logo-imgs"
              />
            </div>
            
            <br></br>
            <TextField
              label="Username"
              id="name"
              error={nameError}
              onChange={(event) => {
                setName(event.target.value);
                setNameError(false);
              }}
              helperText={nameError ? "Please enter your username" : ""}
              inputRef={signIn.nameRef}
            />
            <br></br>
            <pre></pre>
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
              helperText={emailError ? "Please enter a valid email" : ""}
              inputRef={signIn.emailRef}
            />
            <br></br>
            <pre></pre>
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
              helperText={passwordError ? "Password must be atleast 8 character with one special case,one number,one Uppercase,one LowerCase" : ""}
              inputRef={signIn.passRef}
            />
            <br></br>
            <pre></pre>
            <br></br>
            <TextField
              label="Confirm Password"
              id="password1"
              type="password"
              value={password1}
              error={passwordError1}
              onChange={(event) => {
                setPassword1(event.target.value);
                setPasswordError1(false);
              }}
              helperText={passwordError1 ? "Passwords do not match" : ""}
            />
            <br></br>
            <pre></pre>
            <br></br>
            <Button
              type="Submit"
              onClick={handleSubmit}
            >
              Signup
            </Button>
            <br></br>
          </Paper>
        </div>
      </center>
    </div>
  );
};

export default SignupPage;

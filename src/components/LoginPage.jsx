import React, { useState } from "react";
import video from "../assests/video.mp4";
import { Button, Paper, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
const LoginPage = () => {
  const [isnameFound, setname] = useState(true);
  const [isvalidPass, setPass] = useState(true);
  const navigate = useNavigate();
  const nameRef = useRef("");
  const passRef = useRef("");
  let username = "";
  let pass = "";
  const handleClick = () => {
    
    if (nameRef.current.value.trim()) {
      axios
        .get(`http://localhost:2008/users?name=${nameRef.current.value}`
        )
        .then((response) => {
          if (response.data[0]) {
            setname(true);
            username = response.data[0].name;
            pass = response.data[0].password;
            if (passRef.current.value === pass) {
              navigate("/dashboard");
            } else {
              setPass(false);
            }
          } else {
            setname(false);
          }
        })
        .catch();
    }
  };

  return (
    <div className="divi">
      <video src={video} autoPlay loop muted />
      <center>
        <br></br>

        <div className="container">
          <h1 style={{ color: "whitesmoke" }}>LOGIN</h1>

          <Paper
            elevation={10}
            square
            className="div"
            style={{ backgroundColor: "silver" }}
          >
            <br></br>
            <div className="logo-container">
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/68/67/29/1000_F_168672905_hxZBOpp8unSVPxT8XqZN6o6S8KTgRmJz.jpg"
                className="logo-img"
              />
            </div>
            <center>
              <br></br>
              <TextField
                label="Username"
                id="name"
                inputRef={nameRef}
                helperText={!isnameFound ? "User not Found" : null}
              />
              <br></br>
              <pre></pre>
              <br></br>
              <TextField
                label="Password"
                id="password"
                type="password"
                inputRef={passRef}
                helperText={!isvalidPass ? "Invalid Password" : null}
              />
              <br></br>
              <pre></pre>
              <br></br>
              <Button type="Submit" onClick={handleClick}>
                Login
              </Button>
              &emsp;&emsp;&emsp;
              <Link to="/lo">
                <Button type="Submit">Signup</Button>
              </Link>
              <br></br>
            </center>
          </Paper>
        </div>
      </center>
    </div>
  );
};
export default LoginPage;
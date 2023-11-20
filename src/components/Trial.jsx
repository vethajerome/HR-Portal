import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
function Trial()
{
  function display()
  {
      alert("Signed up");
  }
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[visible,setVisible]=useState(false);
  const getElement=(event)=>
  {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
  }
    return( 
        <div className="di">
        <center>
          <br>
          </br>
        <h1>Signup</h1>
        <Paper  elevation={10} square className="v" > 
            <center>
              <br>
              </br>
            <pre>
            </pre>
         <TextField label="Username" id="name"><input onchange={(event)=>setName(event.target.value)}></input></TextField>
            <pre>
            </pre>
            <br>
            </br>
         <TextField label="Email" id="email"><input onchange={(event)=>setEmail(event.target.value)}></input></TextField>
            <pre>
            </pre>
            <br>
            </br>
         <TextField label="Password" id="password" type={visible ? "text" : "password"}><input  onchange={(event)=>setEmail(event.target.value)}></input></TextField>
            <pre>
            </pre>
            <br>
            </br>
         <TextField label="Confirm Password" id="password" type={visible ? "text" : "password"}><input onchange={(event)=>setEmail(event.target.value)}></input></TextField>
            <pre>
            </pre>
            <br>
            </br>
<Button onClick={display}>Submit</Button>
            </center>
      </Paper>
        </center>
          </div>
    );
}
export default Trial;
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

function useSignup() {
  const [error, setError] = useState("");
  const nameRef = useRef();
  const emailRef=useRef();
  const passRef=useRef();

  const addUser = () => {
    axios.post("http://localhost:2008/users", {
      name: nameRef.current.value,
      email:emailRef.current.value,
      password:passRef.current.value
    });
  };
  return { nameRef,emailRef,passRef, addUser };
}

export default useSignup;
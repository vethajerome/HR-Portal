import axios from "axios";
import { useRef } from "react";

function useSignup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const addUser = () => {
    axios.post("http://localhost:2008/users", {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    });
  };

  return { nameRef, emailRef, passRef, addUser };
}

export default useSignup;

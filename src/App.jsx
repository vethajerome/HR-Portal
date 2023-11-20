import React from "react";
import CSS from "./App.css"; 
import DrawerAppBar from "./components/HomePage";
import LoginButton from "./components/LoginButton";
import Photo from "./components/Photo";
function App() {
  return (
    
    <div className="body">
      <DrawerAppBar></DrawerAppBar>
      <div style={{ textAlign: "center" }}>
        <Photo className="photo" />
      </div>
      <div style={{ textAlign: "center" }}>
        <LoginButton />
      </div>
    </div>
  );
}

export default App;
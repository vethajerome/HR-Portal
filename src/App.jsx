import React, { useState } from "react";
import CSS from "./App.css"; 

import LoginButton from "./components/LoginButton";
import Photo from "./components/Photo";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Employee from "./HomePage/Employee";
import ResponsiveDrawer from "./HomePage/Sideclicks";
import Signup from "./components/Signup";
import { Usercontext } from "./components/Usercontext";
import DrawerAppBar from "./components/HomePage";
import Default from "./components/Default";
const router=createBrowserRouter([
  {path:"/",element:<Default/>},
  {path:"/login",element:<LoginPage />},
  {path: "/dashboard", element: <ResponsiveDrawer />},
  {path:"/:id",element:<Employee />},
  {path:"/lo",element:<Signup />}
]);

function App() {
  const [user,setuser]=useState("");
  return (
    
    <div >
      <Usercontext.Provider value={[user,setuser]}>
        <RouterProvider router={router}/>
      </Usercontext.Provider>
    </div>
  );
}
export default App;
import axios from "axios";
import React, { useState, createContext } from "react";
import { email, password } from "../pages/Login";

const AuthContext = React.createContext();


const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  // const [formData, setFormdata] = useState([]);

  // const handlechage = (e) => {
  //   const inputName = e.target.name;

  //   setFormdata({...formData, [inputName]: e.target.value});
  // }

  const handleLogin = async(email,password) => {
 
  //   //  api request to reqres.in for the token
    let res = await fetch("https://reqres.in/api/login",
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      }),
    });

    let data = await res.json();
    setToken(data.token);
  };

  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("");
  };

  const value = { handleLogin, token, handleLogout };

  return (
  <div>
      <div>
          <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      </div>
      
      <div>
        {/* <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Enter Email" onChange={handlechage}/>
          <input type="password" name="password" placeholder="Enter Password" onChange={handlechage}/>
          <input type="submit" />
        </form> */}
      </div>
  </div>
    
  );

  
};

export { AuthContext, AuthContextProvider };


// -------------------------------------



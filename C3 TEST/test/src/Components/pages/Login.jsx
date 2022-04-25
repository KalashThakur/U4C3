import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Form } from "./EditBookData";

// add input styling
export const Input = styled.input`
 width: 30%;
 padding: 8px;
 background-color: #9bbabd;
 margin-top: 15px;
 border-radius: 5px;
`;


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/books";
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
        <Input
          data-testid="login-form-email"
          placeholder="Enter Email"
          value={email}
          name="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <Input
          data-testid="login-form-password"
          placeholder="Enter Password"
          value={password}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        
       <div>
        <Input value = "Login" type={"submit"} data-testid="login-form-submit" />
        </div>
      </Form>
    </>
  );
};

import "./login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import swal from "sweetalert";

const Login = () => {
  <script src="//unpkg.com/sweetalert/dist/sweetalert.min.js"></script>;

  const passwordRef = React.createRef();
  const loginRef = React.createRef();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("login");

    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    if (login === "admin" && password === "admin") {
      console.log("success");
      navigate("/dashboard");
    } else {
      console.log("error");
      swal("Error", "Wrong login or password", "error");
    }
  };
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="box">
        <form onSubmit={loginHandler}>
          <label>Login : </label>
          <input type="text" name="uname" required ref={loginRef}></input>
          <br></br>
          <label>Password : </label>
          <input type="password" required ref={passwordRef}></input>
          <br></br>
          <button className="submit-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
          <a href="/register">Create account</a>
          <a href="/forgot">Forgot password</a>
        </form>
      </div>
    </>
  );
};

export default Login;

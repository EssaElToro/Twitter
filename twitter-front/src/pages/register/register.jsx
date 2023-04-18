import "./register.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const navigate = useNavigate();

  const validate = (email, Nickname, password, confirmPassword) => {
    console.log(email);
    console.log(email.split(""));
    console.log(email.split("").includes("@"));
    if (!email.split("").includes("@")) {
      swal("Error", "Invalid email address", "error");
      return false;
    }
    if (Nickname.length <= 3) {
      swal("Error", "Nickname must be longer than 3 characters", "error");
      return false;
    }
    if (password !== confirmPassword) {
      swal("Error", "Passwords do not match", "error");
      return false;
    }
    return true;
  };
  const registerHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const Nickname = e.target.uname.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (validate(email, Nickname, password, confirmPassword)) {
      navigate("/register/email");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="boxr">
        <form onSubmit={registerHandler}>
          <label>Email : </label>
          <input type="text" name="email" required></input>
          <br></br>
          <label>Nickname : </label>
          <input type="text" name="uname" required></input>
          <br></br>
          <label>Password : </label>
          <input type="password" name="password" required></input>
          <br></br>
          <label>Confirm password : </label>
          <input type="password" name="confirmPassword" required></input>
          <br></br>
          <button type="submit" className="submit-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
          </button>
          <a href="/login">Already have an account?</a>
        </form>
      </div>
    </>
  );
};
export default Register;

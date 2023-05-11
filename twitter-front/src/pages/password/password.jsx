import "./password.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Password = () => {
  const navigate = useNavigate();

  const validate = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      swal("Error", "Passwords do not match", "error");
      return false;
    }
    return true;
  };
  const change_Handler = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (validate(password, confirmPassword)) {
      navigate("/login");
      swal("Success", "Password changed successfully", "success");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="box">
        <form onSubmit={change_Handler}>
          <div className="string">
            <h2>Change your password</h2>
            <p>Enter your new password</p>
          </div>
          <label>New password : </label>
          <input type="password" name="password" required></input>
          <label>Confirm password : </label>
          <input type="password" name="confirmPassword" required></input>
          <button type="submit" className="submit-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Change
          </button>
          <a href="/register">Create account</a>
        </form>
      </div>
    </>
  );
};

export default Password;

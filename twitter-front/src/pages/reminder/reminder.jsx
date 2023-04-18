import "./reminder.scss";
import { useNavigate } from "react-router-dom";
import React from "react";
import swal from "sweetalert";

const Reminder = () => {
  const navigate = useNavigate();

  const validate = (email) => {
    if (!email.split("").includes("@")) {
      swal("Error", "Invalid email address", "error");
      return false;
    }
    return true;
  };
  const reset_Handler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (validate(email)) {
      navigate("/forget-password/change-password");
      swal("Success", "Email sent successfully", "success");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="box">
        <form onSubmit={reset_Handler}>
          <div className="string">
            <h2>Forgot your password?</h2>
            <p>Enter your email to restore and change password</p>
          </div>
          <label>Email : </label>
          <input type="text" name="email" required></input>
          <button type="submit" className="submit-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send
          </button>
          <a href="/register">Create account</a>
        </form>
      </div>
    </>
  );
};
export default Reminder;

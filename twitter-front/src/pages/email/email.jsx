import "./email.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Email = () => {
  const navigate = useNavigate();

  const verify_handler = (e) => {
    e.preventDefault();
    navigate("/login ");
    swal("Success", "Email verified successfully", "success");
  };
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="box">
        <form onSubmit={verify_handler}>
          <div className="box-header">
            <h2>Email verfication</h2>
            <p>
              To verify email, please enter your inbox and enter your
              verfication code{" "}
            </p>
          </div>
          <label>verfication code : </label>
          <input type="text" name="email" required />
          <button type="submit" className="submit-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Email;

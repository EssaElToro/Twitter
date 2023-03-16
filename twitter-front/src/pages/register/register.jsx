import React, { useState } from "react";
import joy from "joy";

function RegisterModule() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the Joy schema for email and password validation
    const schema = {
      email: joy.email(),
      password: joy.string().min(8).max(30),
    };

    // Validate the inputs against the schema
    try {
      joy.validate(schema, { email, password });
    } catch (e) {
      setErrorMessage(`Validation error: ${e.message}`);
      return;
    }

    // If the validation passes, create a new user account
    // (replace this with your actual implementation logic)
    console.log(
      `Creating new account with email: ${email} and password: ${password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Register</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

export default RegisterModule;

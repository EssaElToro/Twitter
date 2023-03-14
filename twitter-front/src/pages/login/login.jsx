import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div>
        <form>
          <label>Login : </label>
          <input type="text"></input>
          <br></br>
          <label>Password : </label>
          <input type="text"></input>
          <br></br>
        </form>
        <input type="submit" value="login"></input>
      </div>
    </>
  );
};

export default Login;

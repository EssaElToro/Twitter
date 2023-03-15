import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="box">
        <form>
          <label>Login : </label>
          <input type="text"></input>
          <br></br>
          <label>Password : </label>
          <input type="text"></input>
          <br></br>
        </form>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </a>
      </div>
    </>
  );
};

export default Login;

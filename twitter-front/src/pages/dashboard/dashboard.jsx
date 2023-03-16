import "./dashboard.scss";

// Make a dashboard for the user to see and add their tweets like and comment other users tweets

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="box">
        <form>
          <label>Tweet : </label>
          <input type="text"></input>
          <br></br>
          <label>Comment : </label>
          <input type="text"></input>
          <br></br>
        </form>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Tweet
        </a>
      </div>
    </>
  );
};

export default Dashboard;

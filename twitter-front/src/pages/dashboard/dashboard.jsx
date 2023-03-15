import "./dashboard.scss";

// Make a dashboard for the user to see their tweets and other users' tweets
const Dashboard = () => {
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>

      <div className="dashboard">
        <div className="tweets">
          <h2>Tweets</h2>
        </div>
        <div className="users">
          <h2>Users</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard

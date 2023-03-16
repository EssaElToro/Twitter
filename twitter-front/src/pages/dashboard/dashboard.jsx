import "./dashboard.scss";

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

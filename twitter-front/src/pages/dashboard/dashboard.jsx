import "./dashboard.scss";

const Dashboard = () => {
  const createPost = () => {};
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="board">
        <h1>New tweets</h1>
        <button onClick={createPost}>Create post</button>
      </div>
    </>
  );
};

export default Dashboard;

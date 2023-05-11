import "./dashboard.scss";
import React from "react";
import Popup from "reactjs-popup";

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
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup>
      </div>
      <div className="profile">
        <h1>Settings</h1>
        <a href="./Dashboard/profile">Show profile</a>
        <a href="./login">Logout</a>
      </div>
      <div className="filters">
        <h1>Search</h1>
        <input type="text" placeholder="Search" />
        <a>Filters:</a>
      </div>
    </>
  );
};

export default Dashboard;

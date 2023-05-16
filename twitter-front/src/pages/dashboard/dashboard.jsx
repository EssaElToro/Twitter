import "./dashboard.scss";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import * as icons from "lucide-react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      backgroundColor: "white",
      width: "90%",
    },
  };
  const [file, setFile] = useState();

  const changeHandler = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const twittsHandler = () => {};
  return (
    <>
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="board">
        <h1>New tweets</h1>
        <div className="popup">
          <button onClick={() => setIsOpen(true)}>Add tweet</button>
          <ReactModal
            isOpen={isOpen}
            style={styles}
            contentLabel="Example Modal"
            onRequestClose={() => setIsOpen(false)}
          >
            <div className="post">
              <icon onClick={() => setIsOpen(false)}>
                <icons.LucideXSquare></icons.LucideXSquare>
              </icon>
              <h1>New tweet</h1>
              <form onSubmit={twittsHandler}>
                <h2>Add Image:</h2>
                <img src={file} />
                <input type="file" onChange={changeHandler} />
                <input type="text" placeholder="Title" required />
                <input type="text" placeholder="Description" />
                <br></br>
                <icon type="submit" className="abc">
                  <icons.LucideSend></icons.LucideSend>
                </icon>
              </form>
            </div>
          </ReactModal>
        </div>
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

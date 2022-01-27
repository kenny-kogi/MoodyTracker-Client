import React from "react";
import Navbar from "../Home/Navbar/Navbar";

const LogMood = ({ loggedInStatus }) => {
  return (
    <div>
      <Navbar loggedInStatus={loggedInStatus} />
      <h1>Welcome Today...Log your Mood</h1>
    </div>
  );
};

export default LogMood;

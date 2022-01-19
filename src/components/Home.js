import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({ loggedInStatus, handleLogout }) => {
  const handleClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        handleLogout();
        redirect();
      })
      .catch((error) => console.log(error));
  };

  const redirect = () => {
    this.props.history.push("/");
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      {loggedInStatus ? (
        <Link to="/logout" onClick={handleClick}>
          Log Out
        </Link>
      ) : null}
    </div>
  );
};
export default Home;

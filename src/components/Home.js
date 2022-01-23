import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Home/Navbar/Navbar";
import Hero from "./Home/Hero";

const Home = ({ loggedInStatus, handleLogout }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    axios
      .delete("http://localhost:3001/user/logout", { withCredentials: true })
      .then((response) => {
        handleLogout();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  console.log(loggedInStatus);

  return (
    <div>
      <Navbar />
      <Hero />
      {loggedInStatus ? (
        <Link to="/logout" onClick={handleClick}>
          Log Out
        </Link>
      ) : null}
    </div>
  );
};
export default Home;

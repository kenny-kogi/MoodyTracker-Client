import React from "react";
import { useNavigate } from "react-router-dom";
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
        navigate("/logout");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar loggedInStatus={loggedInStatus} handleClick={handleClick} />
      <Hero />
    </div>
  );
};
export default Home;

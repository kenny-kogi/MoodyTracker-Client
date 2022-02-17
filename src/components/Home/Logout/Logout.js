import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import Navbar from "../Navbar/Navbar";

const Logout = () => {
  const { handleLogout, handleLogoutPatient, isLoggedIn } =
    useContext(AppContext);
  let currentLogged;

  isLoggedIn ? (currentLogged = "user") : (currentLogged = "patient");

  const handleClick = () => {
    axios
      .delete(`http://localhost:3001/${currentLogged}/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        isLoggedIn ? handleLogout() : handleLogoutPatient();
      })
      .catch((error) => console.log(error));
  };

  console.log(currentLogged);

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <h1>Log out Page.....</h1>
    </>
  );
};

export default Logout;

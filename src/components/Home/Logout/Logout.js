import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import Navbar from "../Navbar/Navbar";

const Logout = () => {
  const {
    handleLogout,
    handleLogoutPatient,
    isLoggedIn,
    handleLogoutTherapist,
    isLoggedInPatient,
    isLoggedInTherapist,
  } = useContext(AppContext);
  let currentLogged;

  if (isLoggedIn) {
    currentLogged = "user";
  } else if (isLoggedInPatient) {
    currentLogged = "patient";
  } else if (isLoggedInTherapist) {
    currentLogged = "therapist";
  }
  const handleClick = () => {
    axios
      .delete(`http://localhost:3001/${currentLogged}/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        if (isLoggedIn) {
          handleLogout();
        } else if (isLoggedInPatient) {
          handleLogoutPatient();
        } else if (isLoggedInTherapist) {
          handleLogoutTherapist();
        }
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
      <Navbar user={true} />
      <h1>Log out Page.....</h1>
    </>
  );
};

export default Logout;

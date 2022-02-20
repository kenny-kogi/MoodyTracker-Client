import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import Navbar from "../../Home/Navbar/Default/Navbar";
import { useParams } from "react-router";

const Logout = () => {
  const { currentlogged } = useParams();
  const { handleLogout, handleLogoutPatient, handleLogoutTherapist } =
    useContext(AppContext);

  const handleClick = () => {
    axios
      .delete(`http://localhost:3001/${currentlogged}/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        if (currentlogged === "user") {
          handleLogout();
        } else if (currentlogged === "patient") {
          handleLogoutPatient();
        } else if (currentlogged === "therapist") {
          handleLogoutTherapist();
        }
      })
      .catch((error) => console.log(error));
  };

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

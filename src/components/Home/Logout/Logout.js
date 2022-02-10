import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import Navbar from "../Navbar/Navbar";

const Logout = () => {
  const { handleLogout } = useContext(AppContext);
  const handleClick = () => {
    axios
      .delete("http://localhost:3001/user/logout", { withCredentials: true })
      .then((response) => {
        console.log(response);
        handleLogout();
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
      <h1>Log out Page.....Bye</h1>
    </>
  );
};

export default Logout;

import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import { useParams } from "react-router";
import Home from "../../Home";
import { useToast } from "@chakra-ui/react";

const Logout = () => {
  const { currentlogged } = useParams();
  const {
    handleLogout,
    handleLogoutPatient,
    handleLogoutTherapist,
    handleLogoutAdmin,
  } = useContext(AppContext);

  let toast = useToast();
  const handleClick = () => {
    axios
      .delete(`http://localhost:3001/${currentlogged}/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        toast({
          title: "Logged Out",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
          containerStyle: {
            backgroundColor: "purple",
          },
        });
        if (currentlogged === "user") {
          handleLogout();
        } else if (currentlogged === "patient") {
          handleLogoutPatient();
        } else if (currentlogged === "therapist") {
          handleLogoutTherapist();
        } else if (currentlogged === "admin") {
          handleLogoutAdmin();
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home />;
};

export default Logout;

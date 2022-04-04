import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/User/Navbar";
import { Flex, Container, useToast } from "@chakra-ui/react";
import SideMenu from "../../Shared/SideMenu";
import { AppContext } from "../../../context/appcontext";
import axios from "axios";
import Moods from "../DailyLog/Moods";
import { useNavigate } from "react-router";

const UserLog = () => {
  const [moods, setMoods] = useState({});
  const { user, isLoggedIn } = useContext(AppContext);

  let navigate = useNavigate();
  let toast = useToast();

  const checkAuthorized = () => {
    if (!isLoggedIn) {
      navigate("/");
      toast({
        title: "Not Authorized",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "purple",
        },
      });
    }
  };

  useEffect(() => {
    checkAuthorized();
    axios
      .get(`http://localhost:3001/moods/user/${user.id}`)
      .then((response) => {
        setMoods(response.data.moods);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          <Moods moods={moods} />
        </Container>
      </Flex>
    </>
  );
};
export default UserLog;

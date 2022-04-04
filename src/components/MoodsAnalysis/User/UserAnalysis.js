import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../context/appcontext";
import MoodsAnalysis from "../MoodDashboard/MoodsAnalysis";
import Navbar from "../../Home/Navbar/User/Navbar";
import { Flex, Container, Text, Heading, useToast } from "@chakra-ui/react";
import SideMenu from "../../Shared/SideMenu";
import { useNavigate } from "react-router";

const UserAnalysis = () => {
  const { user, isLoggedIn } = useContext(AppContext);
  const urlString = "http://localhost:3001/users";

  let toast = useToast();
  let navigate = useNavigate();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          <Heading
            as="h1"
            size="sm"
            letterSpacing="wide"
            fontWeight="bold"
            color="purple"
            fontSize="30px"
            mb="30"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
          >
            <Text>
              <Text as="span" color="pink.400" fontSize="40px">
                Welcome {user.username},{" "}
              </Text>
              Here is your Mood Report
            </Text>
          </Heading>

          <MoodsAnalysis currentLogged={user} urlString={urlString} />
        </Container>
      </Flex>
    </>
  );
};

export default UserAnalysis;

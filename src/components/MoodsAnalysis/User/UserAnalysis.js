import React, { useContext } from "react";
import { AppContext } from "../../../context/appcontext";
import MoodsAnalysis from "../MoodDashboard/MoodsAnalysis";
import Navbar from "../../Home/Navbar/User/Navbar";
import { Flex, Container, Text, Heading } from "@chakra-ui/react";
import SideMenu from "../../Shared/SideMenu";
const UserAnalysis = () => {
  const { user } = useContext(AppContext);
  const urlString = "http://localhost:3001/users";

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

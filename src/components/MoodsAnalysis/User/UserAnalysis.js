import React, { useContext } from "react";
import { AppContext } from "../../../context/appcontext";
import MoodsAnalysis from "../MoodDashboard/MoodsAnalysis";
import Navbar from "../../Home/Navbar/User/Navbar";
import { Flex, Container } from "@chakra-ui/react";
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
          <MoodsAnalysis currentLogged={user} urlString={urlString} />
        </Container>
      </Flex>
    </>
  );
};

export default UserAnalysis;

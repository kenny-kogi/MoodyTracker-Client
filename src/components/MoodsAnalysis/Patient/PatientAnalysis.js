import React, { useContext } from "react";
import { AppContext } from "../../../context/appcontext";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import { Flex, Container } from "@chakra-ui/react";
import SideMenu from "../../Shared/Patient/SideMenu";
import MoodsAnalysis from "../MoodDashboard/MoodsAnalysis";

const PatientAnalysis = () => {
  const { patient } = useContext(AppContext);
  const urlString = "http://localhost:3001/patients";

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          <MoodsAnalysis currentLogged={patient} urlString={urlString} />
        </Container>
      </Flex>
    </>
  );
};

export default PatientAnalysis;

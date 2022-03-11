import React, { useContext } from "react";
import { AppContext } from "../../../context/appcontext";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";
import SideMenu from "../../Shared/Patient/PatientDash/SideMenu";
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
                Welcome {patient.username},{" "}
              </Text>
              Here is your Mood Report
            </Text>
          </Heading>
          <MoodsAnalysis currentLogged={patient} urlString={urlString} />
        </Container>
      </Flex>
    </>
  );
};

export default PatientAnalysis;

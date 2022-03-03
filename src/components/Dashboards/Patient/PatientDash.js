import React, { useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/SideMenu";
import { Flex, Container, Center, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import axios from "axios";
import MoodsAnalysis from "../../MoodsAnalysis/MoodDashboard/MoodsAnalysis";
import Spinner from "../../Shared/Spinner";

const PatientDash = () => {
  const [patient, setPatient] = useState(null);
  const { id } = useParams();
  const urlString = "http://localhost:3001/patients";

  const getPatientDetails = () => {
    axios
      .get(`http://localhost:3001/patients/${id}`)
      .then((response) => {
        setPatient(response.data.patient);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPatientDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let nullCheckerPatient = patient === null;

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
                Here is {nullCheckerPatient ? " " : patient.username},{" "}
              </Text>
              Mood Analysis
            </Text>
          </Heading>
          {nullCheckerPatient ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <MoodsAnalysis currentLogged={patient} urlString={urlString} />
          )}
        </Container>
      </Flex>
    </>
  );
};

export default PatientDash;

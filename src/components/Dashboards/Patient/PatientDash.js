import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import {
  Flex,
  Container,
  Center,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import axios from "axios";
import MoodsAnalysis from "../../MoodsAnalysis/MoodDashboard/MoodsAnalysis";
import Spinner from "../../Shared/Spinner";
import SideMenu from "../../Shared/Therapist/PatientAnalysis/SideMenu";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";

const PatientDash = () => {
  const { isLoggedInTherapist } = useContext(AppContext);
  const [patient, setPatient] = useState(null);
  const { id } = useParams();
  const urlString = "http://localhost:3001/patients";

  let toast = useToast();
  let navigate = useNavigate();

  const checkAuthorized = () => {
    if (!isLoggedInTherapist) {
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
    checkAuthorized();
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

import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/SideMenu";
import { Flex, Container, Center, Text } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";

const TherapistDash = () => {
  const { therapist } = useContext(AppContext);
  const [patients, setPatients] = useState(null);
  const getAllPatients = () => {
    axios
      .get(`http://localhost:3001/therapists/patients/${therapist.id}`)
      .then((response) => {
        setPatients(response.data.patients);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let nullCheckerPatient = patients === null;
  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          {nullCheckerPatient ? (
            <Center>
              <Text>You Have No registered Patients</Text>
            </Center>
          ) : (
            patients.map((patient) => {
              return <Text>{patient.username}</Text>;
            })
          )}
        </Container>
      </Flex>
    </>
  );
};

export default TherapistDash;

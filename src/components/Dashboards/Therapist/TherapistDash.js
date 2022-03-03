import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/SideMenu";
import { Flex, Container, Center, Text, Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import Spinner from "../../Shared/Spinner";
import { useNavigate } from "react-router";

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

  let navigate = useNavigate();

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
          <Flex flexDirection="row" wrap="wrap" gap={10}>
            {nullCheckerPatient ? (
              <Center>
                <Spinner />
                <Text>You Have No registered Patients</Text>
              </Center>
            ) : (
              patients.map((patient) => {
                return (
                  <Box
                    width={300}
                    height={300}
                    border="1px solid purple.100"
                    borderRadius={8}
                    boxShadow="xl"
                    borderWidth={2}
                  >
                    <Flex flexDirection="column" justifyContent="space-between">
                      {patient.username}
                      <Button
                        m={5}
                        bg="pink.400"
                        color="white"
                        _hover={{ bg: "purple" }}
                        fontWeight="bold"
                        onClick={() => {
                          navigate(`/patient/analysis/${patient.id}`);
                        }}
                      >
                        View Analysis
                      </Button>
                    </Flex>
                  </Box>
                );
              })
            )}
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default TherapistDash;

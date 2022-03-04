import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/SideMenu";
import {
  Flex,
  Container,
  Center,
  Text,
  Box,
  Button,
  Image,
  Heading,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import Spinner from "../../Shared/Spinner";
import { useNavigate } from "react-router";
import PatientSvg from "../../../assets/pt.png";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
          <Heading
            as="h1"
            size="sm"
            letterSpacing="wide"
            fontWeight="bold"
            color="purple"
            fontSize="30px"
            mb="30"
            textAlign="center"
          >
            <Text as="span" color="pink.400" fontSize="40px">
              Welcome Dr. {therapist.firstName},{" "}
            </Text>
            Here is Your Patient Dashboard
          </Heading>
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
                    <Flex flexDirection="column">
                      <Badge textAlign="center" width={100} mb={2}>
                        {" "}
                        {patient.firstName}
                      </Badge>
                      <Image
                        ml={14}
                        src={PatientSvg}
                        alt="Patient Svg"
                        height={150}
                        width={150}
                        mb={4}
                      />
                      <Button
                        ml={5}
                        mr={5}
                        mb={2}
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

                      <Flex direction="row" justifyContent="space-evenly">
                        <IconButton
                          variant="outline"
                          colorScheme="blue"
                          aria-label="Call Sage"
                          fontSize="20px"
                          icon={<CgProfile />}
                          width={100}
                          onClick={() => {
                            console.log("Profile");
                          }}
                        />

                        <IconButton
                          variant="outline"
                          colorScheme="red"
                          aria-label="Call Sage"
                          fontSize="30px"
                          width={100}
                          icon={<MdDelete />}
                          onClick={() => {
                            console.log("delete");
                          }}
                        />
                      </Flex>
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

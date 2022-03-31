import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Home/Navbar/Admin/Navbar";
import SideMenu from "../Shared/Admin/SideMenu";
import { Container, Text, Flex, Box, Center, Button } from "@chakra-ui/react";
import { AppContext } from "../../context/appcontext";
import moment from "moment";
import axios from "axios";
import Spinner from "../Shared/Spinner";
import ModelNames from "./ModelNames";
import AverageAge from "./AverageAge";
import UserLocation from "./UserLocation";
import UserGender from "./UserGender";
import MentalFacility from "./MentalFacility";

const Report = () => {
  const { admin } = useContext(AppContext);
  const [modelsCount, setModelsCount] = useState(null);
  const [modelsNames, setModelsNames] = useState(null);
  const [averageAge, setAverageAge] = useState(null);
  const [userLocationData, setUserLocationData] = useState(null);
  const [patientLocationData, setPatientLocationData] = useState(null);
  const [userGenderData, setUserGenderData] = useState(null);
  const [patientGenderData, setPatientGenderData] = useState(null);
  const [mentalFacilityData, setMentalFacilityData] = useState(null);
  const [update, setUpdate] = useState(false);
  let greeting = "";

  if (moment().isBetween(3, 12, "HH")) {
    greeting = "Good Morning";
  } else if (moment().isBetween(12, 15, "HH")) {
    greeting = "Good Afternoon";
  } else if (moment().isBetween(15, 20, "HH")) {
    greeting = "Good Evening";
  } else if (moment().isBetween(20, 3, "HH")) {
    greeting = "Good Night";
  } else {
    greeting = "Hello";
  }

  const getModelsCount = () => {
    axios
      .get("http://localhost:3001/reports/models/names")
      .then((response) => {
        setModelsNames(response.data.modelsNames);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getModelsNames = () => {
    axios
      .get("http://localhost:3001/reports/models/count")
      .then((response) => {
        setModelsCount(response.data.modelsCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteModel = (modelName, id) => {
    axios
      .delete(`http://localhost:3001/${modelName}/${id}`)
      .then((response) => {
        setUpdate(!update);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAverageAges = () => {
    axios
      .get("http://localhost:3001/reports/users_patients/averageAge")
      .then((response) => {
        setAverageAge(response.data.averageAges);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserLocationData = () => {
    axios
      .get("http://localhost:3001/reports/user/locationData")
      .then((response) => {
        setUserLocationData(response.data.userLocationData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPatientLocationData = () => {
    axios
      .get("http://localhost:3001/reports/patient/locationData")
      .then((response) => {
        setPatientLocationData(response.data.patientLocationData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserGenderData = () => {
    axios
      .get("http://localhost:3001/reports/users/genderData")
      .then((response) => {
        setUserGenderData(response.data.userGenderData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPatientGenderData = () => {
    axios
      .get("http://localhost:3001/reports/patients/genderData")
      .then((response) => {
        setPatientGenderData(response.data.patientGenderData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMentalFacilityData = () => {
    axios
      .get("http://localhost:3001/reports/mental_facility_data")
      .then((response) => {
        setMentalFacilityData(response.data.mentalFacilityData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getModelsCount();
    getModelsNames();
    getAverageAges();
    getUserLocationData();
    getPatientLocationData();
    getUserGenderData();
    getPatientGenderData();
    getMentalFacilityData();
  }, [update]);

  console.log("Average Ages", averageAge);

  let nullCheckerModelsCount = modelsCount === null;
  let nullCheckerModelsNames = modelsNames === null;
  let nullCheckerAverageAge = averageAge === null;
  let nullCheckerUserLocationData = userLocationData === null;
  let nullCheckerPatientLocationData = patientLocationData === null;
  let nullCheckerUserGenderData = userGenderData === null;
  let nullCheckerPatientGenderData = patientGenderData === null;
  let nullCheckerMentalFacilityData = mentalFacilityData === null;

  return (
    <>
      <SideMenu />
      <Container maxWidth="1329px" mr={0} bgColor="blue.50">
        <Flex>
          <Navbar />

          <Flex direction="column" mt="110px" ml={5}>
            <Box
              bgColor="rgb(199 210 254)"
              width={1200}
              height={100}
              boxSizing="border-box"
              borderStyle="solid"
              borderColor="#e5e7eb"
              borderRadius=".125rem"
            >
              <Flex direction="column" m={5}>
                <Text
                  fontSize="1.88rem"
                  line-height="1.33"
                  letter-spacing="-.01em"
                  fontWeight="bold"
                  border=""
                  textColor="color: rgb(30 41 59)"
                >
                  {greeting}, {admin.username} 👋
                </Text>
                <Text>Here is what's happening in Moody Tracker Today</Text>
              </Flex>
            </Box>

            <Box
              height={200}
              width={1200}
              mt={10}
              border="1px solid purple.100"
              borderRadius={8}
              boxShadow="lg"
              borderWidth={1}
              bgColor="whiteAlpha.600"
              direction="row"
            >
              <Flex m={5} justifyContent="space-evenly">
                <Box>
                  <Text>Registered Users</Text>
                  <Text textAlign="center" fontSize={70} fontWeight="bold">
                    {nullCheckerModelsCount ? (
                      <Spinner />
                    ) : (
                      modelsCount.usersCount
                    )}
                  </Text>
                </Box>
                <Box>
                  <Text>Registered Patients</Text>
                  <Text textAlign="center" fontSize={70} fontWeight="bold">
                    {nullCheckerModelsCount ? (
                      <Spinner />
                    ) : (
                      modelsCount.patientsCount
                    )}
                  </Text>
                </Box>
                <Box>
                  <Text>Registered Therapists</Text>
                  <Text textAlign="center" fontSize={70} fontWeight="bold">
                    {nullCheckerModelsCount ? (
                      <Spinner />
                    ) : (
                      modelsCount.therapistsCount
                    )}
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Flex direction="row" justifyContent="space-evenly">
              {nullCheckerModelsNames ? (
                <Center>
                  <Spinner />
                </Center>
              ) : (
                <>
                  <ModelNames
                    modelName={modelsNames.usersDetails}
                    modelTitle="users"
                    deleteModel={deleteModel}
                  />
                  <ModelNames
                    modelName={modelsNames.patientsDetails}
                    modelTitle="patients"
                    deleteModel={deleteModel}
                  />
                  <ModelNames
                    modelName={modelsNames.therapistsDetails}
                    modelTitle="therapists"
                    deleteModel={deleteModel}
                  />
                </>
              )}
            </Flex>

            <Flex direction="row">
              {nullCheckerAverageAge ||
              nullCheckerUserLocationData ||
              nullCheckerPatientLocationData ? (
                <Center>
                  <Spinner />
                </Center>
              ) : (
                <>
                  <AverageAge
                    users={averageAge.avgAgeUsers}
                    patients={averageAge.avgAgePatients}
                  />
                  <UserLocation location={userLocationData} user={"Users"} />
                  <UserLocation
                    location={patientLocationData}
                    user={"Patients"}
                  />
                </>
              )}
            </Flex>

            <Flex direction="row" justifyContent="space-evenly">
              {nullCheckerUserGenderData || nullCheckerPatientGenderData ? (
                <Center>
                  <Spinner />
                </Center>
              ) : (
                <>
                  {" "}
                  <UserGender gender_data={userGenderData} user={"Users"} />
                  <UserGender
                    gender_data={patientGenderData}
                    user={"Patients"}
                  />
                </>
              )}
            </Flex>

            <Flex direction="row">
              {nullCheckerMentalFacilityData ? (
                <Center>
                  {" "}
                  <Spinner />
                </Center>
              ) : (
                <MentalFacility mental_facility_data={mentalFacilityData} />
              )}
            </Flex>

            <Button
              onClick={() => {
                setUpdate(!update);
              }}
            >
              Reload{" "}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Report;

import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/PatientAnalysis/SideMenu";
import {
  Flex,
  Container,
  Center,
  Heading,
  Text,
  Tag,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import axios from "axios";
import Spinner from "../../Shared/Spinner";
import Medication from "./Medication";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";

const MedicationDash = () => {
  const { therapist, isLoggedInTherapist } = useContext(AppContext);
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [medications, setMedications] = useState(null);

  let navigate = useNavigate();
  let toast = useToast();

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

  const getPatientMedications = () => {
    axios
      .get(`http://localhost:3001/patient/medication/${id}`)
      .then((response) => {
        if (response.data.status === "created") {
          setMedications(response.data.medications);
        } else {
          setErrors({ ...errors, errors: response.data.errors });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    checkAuthorized();
    getPatientMedications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nullCheckerMedication = medications === null;

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
            justifyContent="center"
          >
            <Text as="span" color="pink.400" fontSize="40px">
              Hi Dr.{therapist.firstName},{" "}
            </Text>
            Here is Your Patient Medication Logs
          </Heading>
          <Flex direction="row">
            <Tag height={10} color="white" bgColor="purple" ml="150px">
              Drug Name
            </Tag>
            <Tag height={10} color="white" bgColor="purple" ml="350px">
              Prescription
            </Tag>
            <Tag height={10} color="white" bgColor="purple" ml="340px">
              Usage Interval
            </Tag>
          </Flex>
          {nullCheckerMedication ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            medications.map((medication) => (
              <Medication
                drugname={medication.drug_name}
                prescription={medication.prescription}
                usageInterval={medication.usage_interval}
              />
            ))
          )}
        </Container>
      </Flex>
    </>
  );
};

export default MedicationDash;

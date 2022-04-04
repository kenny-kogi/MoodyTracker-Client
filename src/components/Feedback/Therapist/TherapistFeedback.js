import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/PatientAnalysis/SideMenu";
import { Flex, Container, Heading, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router";
import { AppContext } from "../../../context/appcontext";
import FeedbackForm from "./Form/FeedbackForm";
import { useToast } from "@chakra-ui/react";
import Errors from "../../Shared/Errors";
import { useNavigate } from "react-router";

const Feedback = () => {
  const [patient, setPatient] = useState(null);
  // const [update, setUpdate] = useState(false);
  const { id } = useParams();
  const { therapist, isLoggedInTherapist } = useContext(AppContext);
  const [feedback, setFeedback] = useState({
    title: "",
    body: "",
    patient_id: id,
    therapist_id: therapist.id,
  });
  const [errors, setErrors] = useState({});
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/feedbacks",
        { feedback },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          // setUpdate(!update);

          toast({
            title: "Sent",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
            containerStyle: {
              backgroundColor: "purple",
            },
          });
          setFeedback({
            ...feedback,
            title: "",
            body: "",
          });
          setErrors({});
          console.log("feedback created");
        } else {
          setErrors({
            ...errors,
            errors: response.data.errors,
          });
          toast({
            title: "Error!",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
            containerStyle: {
              backgroundColor: "purple",
            },
          });
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  const isEmpty = Object.keys(errors).length === 0;
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
          >
            Leave Feedback For:{" "}
            <Text as="span" color="pink.400" fontSize="40px">
              {nullCheckerPatient ? "Patient" : patient.username}
            </Text>
          </Heading>
          {isEmpty ? null : <Errors errors={errors.errors} />}
          <Box>
            <FeedbackForm
              feedback={feedback}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Feedback;

import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import SideMenu from "../../Shared/Patient/PatientDash/SideMenu";
import { Flex, Container, Center } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";
import Spinner from "../../Shared/Spinner";
import Messages from "./FeedbackMessages";
import { Heading, Text } from "@chakra-ui/react";

const TherapistFeedback = () => {
  const [feedbacks, setFeedbacks] = useState(null);
  const [therapist, setTherapist] = useState(null);
  const { patient } = useContext(AppContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getFeedbacks();
    getTherapistDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFeedbacks = () => {
    axios
      .get(`http://localhost:3001/patient/feedback/${patient.id}`)
      .then((response) => {
        if (response.data.status === "created") {
          setFeedbacks(response.data.feedbacks);
        } else {
          setErrors({ ...errors, errors: response.data.errors });
        }
      })
      .catch((err) => console.log(err));
  };

  const getTherapistDetails = () => {
    axios
      .get(`http://localhost:3001/therapists/${patient.therapist_id}`)
      .then((response) => {
        if (response.data.status === "created") {
          setTherapist(response.data.therapist);
        } else {
          setErrors({ ...errors, errors: response.data.errors });
        }
      })
      .catch((err) => console.log(err));
  };

  let nullCheckerFeedback = feedbacks === null;
  let nullCheckerTherapist = therapist === null;
  console.log("Feedback", feedbacks);
  console.log(therapist);

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" ml={300} pt={5}>
          <Heading
            as="h1"
            letterSpacing="wide"
            fontWeight="bold"
            color="pink.400"
            fontSize="30px"
            mb="30"
            textAlign="center"
          >
            <Text as="span" color="purple" fontSize="30px">
              Hello{" "}
              <Text as="span" color="pink.400">
                {patient.username},
              </Text>{" "}
              Here is Feedback From Dr.{" "}
            </Text>
            {nullCheckerTherapist ? "" : therapist.firstName}
          </Heading>
          {nullCheckerFeedback && nullCheckerTherapist ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            feedbacks.map((feedback) => (
              <Messages
                title={feedback.title}
                body={feedback.body}
                therapistName={therapist.firstName}
                created_at={feedback.created_at}
              />
            ))
          )}
        </Container>
      </Flex>
    </>
  );
};

export default TherapistFeedback;

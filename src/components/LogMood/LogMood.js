import React, { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button, Box, Container, Heading, Text } from "@chakra-ui/react";
import Irritability from "./moods/Irritability";
import Elevated from "./moods/Elevated";
import HoursSlept from "./moods/HoursSlept";
import Anxiety from "./moods/Anxiety";
import Depressed from "./moods/Depressed";

const LogMood = ({ loggedInStatus, user }) => {
  const [errors, setErrors] = useState({
    errors: {},
  });
  const [mood, setMood] = useState({
    hours_slept: null,
    depressed: null,
    anxiety: null,
    irritability_level: null,
    elevated_level: null,
    psychotic_symptoms: null,
    weather: null,
    user_id: user.id,
  });

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/moods", mood, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          navigate("/moods");
        } else {
          setErrors({ ...errors, errors: response.data.errors });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (v) => {
    setMood({
      ...mood,
      hours_slept: v,
    });
  };

  const handleIrritability = (v) => {
    setMood({
      ...mood,
      irritability_level: v,
    });
  };

  const handleEleveted = (v) => {
    setMood({
      ...mood,
      elevated_level: v,
    });
  };

  const handleAnxiety = (v) => {
    setMood({
      ...mood,
      anxiety: v,
    });
  };

  const handleDepressed = (v) => {
    setMood({
      ...mood,
      depressed: v,
    });
  };
  return (
    <>
      <Navbar loggedInStatus={loggedInStatus} />
      <Box pt="5">
        <Container maxWidth="container.xl">
          <Heading
            as="h1"
            size="sm"
            letterSpacing="wide"
            fontWeight="bold"
            color="purple"
            fontSize="30px"
            mb="30"
          >
            <Text as="span" color="pink.400" fontSize="40px">
              Hi,{" "}
            </Text>
            Let's Log Your Mood Today
          </Heading>
          <form onSubmit={handleSubmit}>
            <Box>
              <HoursSlept handleChange={handleChange} />
              <Box
                as="flex"
                flexDirection="row"
                display="flex"
                justifyContent="flex-start"
                flexWrap="wrap"
              >
                <Irritability handleIrritability={handleIrritability} />
                <Elevated handleEleveted={handleEleveted} />
                <Anxiety handleAnxiety={handleAnxiety} />
                <Depressed handleDepressed={handleDepressed} />
              </Box>
              <Button
                type="submit"
                mt="35"
                bg="pink.400"
                color="white"
                height="50px"
                width="25%"
                _hover={{ bg: "purple" }}
                fontWeight="bold"
              >
                Log Mood
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default LogMood;

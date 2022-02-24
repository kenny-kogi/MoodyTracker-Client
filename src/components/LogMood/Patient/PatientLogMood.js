import React, { useEffect, useState, useContext } from "react";
import NavbarPatient from "../../../components/Home/Navbar/Patient/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  Button,
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import Irritability from "../moods/Irritability";
import Elevated from "../moods/Elevated";
import HoursSlept from "../moods/HoursSlept";
import Anxiety from "../moods/Anxiety";
import Depressed from "../moods/Depressed";
import Psychotic from "../moods/Psychotic";
import Weather from "../moods/Weather";
import MoodNote from "../moods/MoodNote";
import SideMenu from "../../Shared/Patient/SideMenu";
import { AppContext } from "../../../context/appcontext";
// import Activity from "./moods/Activity";

const LogMood = () => {
  const { patient } = useContext(AppContext);
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
    patient_id: patient.id,
    mood_note: null,
    activity: null,
  });
  const [checked, setChecked] = useState(false);
  const [circularValue, setCircularValue] = useState(0);

  console.log(patient);

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(mood);
    axios
      .post("http://localhost:3001/moods", mood, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          navigate("/patient/record/message");
        } else {
          setErrors({ ...errors, errors: response.data.errors });
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (checked) {
      setMood({
        ...mood,
        psychotic_symptoms: true,
      });
      console.log(mood);
    } else {
      setMood({
        ...mood,
        psychotic_symptoms: false,
      });
      console.log(mood);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const handleChange = (v) => {
    setMood({
      ...mood,
      hours_slept: v,
    });

    setCircularValue(v);
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

  const handleWeather = (e) => {
    setMood({
      ...mood,
      weather: e.target.value,
    });
  };

  const handleMoodNoteChange = (e) => {
    setMood({
      ...mood,
      mood_note: e.target.value,
    });
  };

  return (
    <>
      <NavbarPatient />
      <Divider border="2px solid" borderColor="purple.100" />
      <Flex flexDirection="row">
        <SideMenu />

        <Container maxWidth="7xl" m={0} pt={5}>
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
              Hi {patient.username},{" "}
            </Text>
            Let's Log Your Mood Today
          </Heading>
          <form onSubmit={handleSubmit}>
            <Box>
              <Box display="flex" flexDirection="row" gap={20}>
                <HoursSlept
                  handleChange={handleChange}
                  circularValue={circularValue}
                />
                <MoodNote
                  value={mood.mood_note}
                  handleMoodNoteChange={handleMoodNoteChange}
                />
              </Box>
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
                <Psychotic checked={checked} setChecked={setChecked} />
                <Weather weather={mood.weather} handleWeather={handleWeather} />
                {/* <Activity /> */}
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
      </Flex>
    </>
  );
};

export default LogMood;

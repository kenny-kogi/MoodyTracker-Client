import React, { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  FormControl,
  Grid,
  GridItem,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMood({
      ...mood,
      [name]: value,
    });

    console.log(name, value);
  };
  return (
    <div>
      <Navbar loggedInStatus={loggedInStatus} />
      <h1>Welcome Today...Log your Mood</h1>

      <form onSubmit={handleSubmit}>
        <Grid templateColumns="repeat(3, 1fr )" mt="15">
          <GridItem colSpan={1} mr="6">
            <FormControl>
              <FormLabel htmlFor="hours_slept">Hours Slept:</FormLabel>
              <Input
                id="hours_slept"
                type="number"
                placeholder="hours slept"
                name="hours_slept"
                value={mood.hours_slept}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mb="2" mr="6">
            <FormControl>
              <FormLabel htmlFor="depressed">Depressed:</FormLabel>
              <Input
                id="depressed"
                type="text"
                placeholder="depressed"
                value={mood.depressed}
                name="depressed"
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mr="6">
            <FormControl>
              <FormLabel htmlFor="anxiety">anxiety:</FormLabel>
              <Input
                id="anxiety"
                type="text"
                placeholder="anxiety"
                value={mood.anxiety}
                name="anxiety"
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mr="6">
            <FormControl>
              <FormLabel htmlFor="irritability_level">
                irritability_level:
              </FormLabel>
              <Input
                id="irritability_level"
                type="number"
                placeholder="irritability_level"
                name="irritability_level"
                value={mood.irritability_level}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1} mr="6">
            <FormControl>
              <FormLabel htmlFor="elevated_level">Elevated level:</FormLabel>
              <Input
                id="elevated_level"
                type="number"
                placeholder="elevated_level"
                name="elevated_level"
                value={mood.elevated_level}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
        </Grid>

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
      </form>
    </div>
  );
};

export default LogMood;

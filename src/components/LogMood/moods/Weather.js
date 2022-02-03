import React from "react";
import { FormControl, FormLabel, Select, Text, Box } from "@chakra-ui/react";

const Weather = ({ handleWeather, weather }) => {
  return (
    <Box
      width="300px"
      height="275px"
      justifyContent="center"
      textAlign="center"
      mr={20}
      mb={20}
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="xl"
      borderWidth={2}
      p={5}
    >
      <Text>Todays Weather</Text>

      <FormControl>
        <FormLabel htmlFor="weather">Weather:</FormLabel>
        <Select
          id="weather"
          placeholder="Select Weather"
          value={weather}
          name="gender"
          onChange={handleWeather}
        >
          <option>Sunny</option>
          <option>Cloudy</option>
          <option>Rainy</option>
          <option>Windy</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Weather;

import React from "react";
import { Text, Image } from "@chakra-ui/react";
import Rainy from "../../../assets/weather/rainy.png";
import Sunny from "../../../assets/weather/rainy.png";
import Windy from "../../../assets/weather/windy.png";
import Cloudy from "../../../assets/weather/cloudy.jpeg";
import { Flex } from "@chakra-ui/react";

const Weather = ({ weather }) => {
  let Weather;

  if (weather === "sunny") {
    Weather = Sunny;
  } else if (weather === "cloudy") {
    Weather = Cloudy;
  } else if (weather === "windy") {
    Weather = Windy;
  } else if (weather === "rainy") {
    Weather = Rainy;
  }

  return (
    <Flex width={350} height={300} m={10} flexDirection="column">
      <Text fontSize="20px" textAlign="center">
        Weather
      </Text>
      <Image
        src={Weather}
        alt="weather svg"
        height={150}
        width={150}
        mt={10}
        ml={20}
      />
    </Flex>
  );
};

export default Weather;

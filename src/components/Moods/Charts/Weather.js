import React from "react";
import { Image } from "@chakra-ui/react";
import Rainy from "../../../assets/weather/rainy.png";
import Sunny from "../../../assets/weather/rainy.png";
import Windy from "../../../assets/weather/windy.png";
import Cloudy from "../../../assets/weather/cloudy.jpeg";
import { Flex, Tag } from "@chakra-ui/react";

const Weather = ({ weather }) => {
  let Weather;

  if (weather === "Sunny") {
    Weather = Sunny;
  } else if (weather === "Cloudy") {
    Weather = Cloudy;
  } else if (weather === "Windy") {
    Weather = Windy;
  } else if (weather === "Rainy") {
    Weather = Rainy;
  }
  //test
  return (
    <Flex width={300} height={300} mt={10} flexDirection="column">
      <Tag textAlign="center" alignContent="center" bgColor="pink.100">
        Weather
      </Tag>
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

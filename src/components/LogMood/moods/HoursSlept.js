import React from "react";
import {
  Box,
  Text,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const HoursSlept = ({ handleChange }) => {
  return (
    <Box
      width="400px"
      height="100px"
      alignItems="center"
      justifyContent="center"
      mr={20}
    >
      <Text>Hours Slept Last Night</Text>

      <Slider
        aria-label="slider-ex-6"
        defaultValue={0}
        name="hours_slept"
        min={0}
        max={10}
        onChange={(v) => handleChange(v)}
        colorScheme="purple"
      >
        <SliderMark value={2} mt="2" ml="2.0">
          2
        </SliderMark>
        <SliderMark value={4} mt="2" ml="4.0">
          4
        </SliderMark>
        <SliderMark value={6} mt="2" ml="6.0">
          6
        </SliderMark>
        <SliderMark value={8} mt="2" ml="8.0">
          8
        </SliderMark>
        <SliderTrack height="4" borderRadius={20}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default HoursSlept;

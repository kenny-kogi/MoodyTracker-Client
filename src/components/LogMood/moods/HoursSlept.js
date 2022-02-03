import React from "react";
import {
  Box,
  Text,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  CircularProgress,
} from "@chakra-ui/react";

const HoursSlept = ({ handleChange, circularValue }) => {
  return (
    <Box
      width="500px"
      height="150px"
      alignItems="center"
      justifyContent="center"
      p={15}
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="xl"
      mb={20}
      borderWidth={2}
    >
      <Text mb={5}>Hours Slept Last Night</Text>

      <Box display="flex" flexDirection="row">
        <Slider
          aria-label="slider-ex-6"
          defaultValue={0}
          name="hours_slept"
          min={0}
          max={10}
          onChange={(v) => handleChange(v)}
          colorScheme="purple"
          mr={15}
        >
          <SliderMark value={2} mt="8" ml="2.0">
            2
          </SliderMark>
          <SliderMark value={4} mt="8" ml="4.0">
            4
          </SliderMark>
          <SliderMark value={6} mt="8" ml="6.0">
            6
          </SliderMark>
          <SliderMark value={8} mt="8" ml="8.0">
            8
          </SliderMark>
          <SliderTrack height="6" borderRadius={20}>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb
            boxSize={6}
            backgroundColor="purple.100"
            outlineColor="purple.300"
          />
        </Slider>

        <CircularProgress
          value={circularValue * 10}
          size="60px"
          color="pink.400"
        />
      </Box>
    </Box>
  );
};

export default HoursSlept;

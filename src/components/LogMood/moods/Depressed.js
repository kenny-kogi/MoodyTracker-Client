import React, { useState } from "react";
import {
  Box,
  Text,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const Depressed = ({ handleDepressed }) => {
  const [color, setColor] = useState("");

  const moodcolor = {
    none: "grey",
    mild: "yellow",
    moderate: "orange",
    severe: "red",
  };

  const handleColor = (v) => {
    if (v === 0) {
      setColor(moodcolor.none);
    } else if (v === 1) {
      setColor(moodcolor.mild);
    } else if (v === 2) {
      setColor(moodcolor.moderate);
    } else if (v === 3) {
      setColor(moodcolor.severe);
    }
  };

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
      <Text>Today most extreme Depressed level</Text>

      <Slider
        height={40}
        mt={7}
        aria-label="slider-ex-6"
        defaultValue={"None"}
        name="anxiety"
        onChange={(v) => handleColor(v)}
        onChangeEnd={(v) => handleDepressed(v)}
        orientation="vertical"
        min={0}
        max={3}
        colorScheme={color}
      >
        <SliderMark value={0} ml="25px" fontSize={15}>
          None
        </SliderMark>
        <SliderMark value={1} ml="25px" fontSize={15}>
          Mild
        </SliderMark>
        <SliderMark value={2} ml="25px" fontSize={15}>
          Moderate
        </SliderMark>
        <SliderMark value={3} ml="25px" fontSize={15}>
          Severe
        </SliderMark>
        <SliderTrack borderRadius={20} width={6}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6} backgroundColor={color} outlineColor={color} />
      </Slider>
    </Box>
  );
};

export default Depressed;

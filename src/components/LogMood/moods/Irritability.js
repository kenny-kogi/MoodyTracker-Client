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

const Irritability = ({ handleIrritability }) => {
  const [color, setColor] = useState("");
  const moodcolor = {
    none: "grey",
    mild: "yellow",
    moderate: "green",
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
      width="200px"
      height="100px"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mr={20}
      mb={20}
    >
      <Text>Today most extreme Irritability</Text>

      <Slider
        mt={7}
        aria-label="slider-ex-6"
        defaultValue={"None"}
        name="irritability_level"
        onChange={(v) => handleColor(v)}
        onChangeEnd={(v) => handleIrritability(v)}
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
        <SliderTrack borderRadius={20} width={4}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default Irritability;

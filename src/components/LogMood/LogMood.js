import React, { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  Button,
  Box,
  Container,
  Heading,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
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
            <Box
              as="flex"
              flexDirection="row"
              display="flex"
              justifyContent="flex-start"
              flexWrap="wrap"
            >
              {" "}
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
              <Box
                width="200px"
                height="100px"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Text>Today most extreme Irritability</Text>

                <Slider
                  mt={7}
                  aria-label="slider-ex-6"
                  defaultValue={"None"}
                  name="irritability_levele"
                  onChange={(v) => handleIrritability(v)}
                  colorScheme="purple"
                  orientation="vertical"
                  min={0}
                  max={3}
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

  // <div>
  //
  //   <h1>Welcome Today...Log your Mood</h1>

  //   <form onSubmit={handleSubmit}>
  //     <Grid templateColumns="repeat(3, 1fr )" mt="15">
  //       <GridItem colSpan={1} mr="6">
  //         <FormControl>
  //           <FormLabel htmlFor="hours_slept">Hours Slept:</FormLabel>
  //           <Input
  //             id="hours_slept"
  //             type="number"
  //             placeholder="hours slept"
  //             name="hours_slept"
  //             value={mood.hours_slept}
  //             onChange={handleChange}
  //           />
  //         </FormControl>
  //         <SliderBar />
  //       </GridItem>

  //       <GridItem colSpan={1} mb="2" mr="6">
  //         <FormControl>
  //           <FormLabel htmlFor="depressed">Depressed:</FormLabel>
  //           <Input
  //             id="depressed"
  //             type="text"
  //             placeholder="depressed"
  //             value={mood.depressed}
  //             name="depressed"
  //             onChange={handleChange}
  //           />
  //         </FormControl>
  //       </GridItem>

  //       <GridItem colSpan={1} mr="6">
  //         <FormControl>
  //           <FormLabel htmlFor="anxiety">anxiety:</FormLabel>
  //           <Input
  //             id="anxiety"
  //             type="text"
  //             placeholder="anxiety"
  //             value={mood.anxiety}
  //             name="anxiety"
  //             onChange={handleChange}
  //           />
  //         </FormControl>
  //       </GridItem>

  //       <GridItem colSpan={1} mr="6">
  //         <FormControl>
  //           <FormLabel htmlFor="irritability_level">
  //             irritability_level:
  //           </FormLabel>
  //           <Input
  //             id="irritability_level"
  //             type="number"
  //             placeholder="irritability_level"
  //             name="irritability_level"
  //             value={mood.irritability_level}
  //             onChange={handleChange}
  //           />
  //         </FormControl>
  //       </GridItem>
  //       <GridItem colSpan={1} mr="6">
  //         <FormControl>
  //           <FormLabel htmlFor="elevated_level">Elevated level:</FormLabel>
  //           <Input
  //             id="elevated_level"
  //             type="number"
  //             placeholder="elevated_level"
  //             name="elevated_level"
  //             value={mood.elevated_level}
  //             onChange={handleChange}
  //           />
  //         </FormControl>
  //       </GridItem>
  //     </Grid>

  //     <Button
  //       type="submit"
  //       mt="35"
  //       bg="pink.400"
  //       color="white"
  //       height="50px"
  //       width="25%"
  //       _hover={{ bg: "purple" }}
  //       fontWeight="bold"
  //     >
  //       Log Mood
  //     </Button>
  //   </form>
  // </div>
};

export default LogMood;

import React from "react";
import { Flex, Box, Center, Button, Heading } from "@chakra-ui/react";
import HoursChart from "../Charts/HoursChart";
import Weather from "../Charts/Weather";
import ColumnChart from "../Charts/ColumnChart";
import Activity from "../Charts/Activity";
import MoodNote from "../Charts/MoodNote";

const Moods = ({ moods, delMood }) => {
  const isEmpty = Object.keys(moods).length === 0;
  console.log(moods);

  return (
    <>
      {isEmpty ? (
        <Center>
          <Flex direction="column">
            <Heading fontSize="20px" color="purple">
              Currently, No Logged Moods
            </Heading>
          </Flex>
        </Center>
      ) : (
        moods.map((mood) => {
          return (
            <>
              <Box
                textAlign="center"
                height={10}
                mb={5}
                display="flex"
                direction="row"
                justifyContent="center"
              >
                <Heading color="purple" fontSize="20px">
                  Logged on: {mood.created_at}
                </Heading>
                <Button
                  bgColor="red.400"
                  color="white"
                  right={-450}
                  _hover={{ bg: "red.600" }}
                  onClick={() => {
                    delMood(mood.id);
                  }}
                >
                  Delete
                </Button>
              </Box>

              <Box
                height="300px"
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                mb={20}
                borderWidth={2}
                direction="column"
              >
                <Flex direction="row" justifyContent="space-evenly">
                  <HoursChart hours_slept={mood.hours_slept} />
                  <ColumnChart
                    anxiety_level={mood.anxiety}
                    depressed_level={mood.depressed}
                    irritability_level={mood.irritability_level}
                    elevated_level={mood.elevated_level}
                  />
                  <Weather weather={mood.weather} />
                  <Activity activity={mood.activity} />
                  <MoodNote moodnote={mood.mood_note} />
                </Flex>
              </Box>
            </>
          );
        })
      )}
    </>
  );
};

export default Moods;

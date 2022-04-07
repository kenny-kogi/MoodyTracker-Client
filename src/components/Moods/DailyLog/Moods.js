import React from "react";
import { Flex, Box, Center } from "@chakra-ui/react";
import HoursChart from "../Charts/HoursChart";
import Weather from "../Charts/Weather";
import ColumnChart from "../Charts/ColumnChart";
import Spinner from "../../Shared/Spinner";
import Activity from "../Charts/Activity";
import MoodNote from "../Charts/MoodNote";

const Moods = ({ moods }) => {
  const isEmpty = Object.keys(moods).length === 0;

  return (
    <>
      {isEmpty ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        moods.map((mood) => {
          return (
            <>
              <Box textAlign="center" bgColor="purple.100" height={10} mb={5}>
                Logged on: {mood.created_at}
              </Box>
              <Flex
                height="300px"
                // alignItems="center"
                // justifyContent="center"
                // p={15}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                mb={20}
                borderWidth={2}
                // overflow="scroll"
                justifyContent="space-evenly"
                direction="row"
                flexWrap="wrap"
              >
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
            </>
          );
        })
      )}
    </>
  );
};

export default Moods;

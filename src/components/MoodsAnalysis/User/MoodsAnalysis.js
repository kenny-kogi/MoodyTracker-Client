import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../Home/Navbar/User/Navbar";
import { Flex, Container, Heading, Text, Badge, Box } from "@chakra-ui/react";
import SideMenu from "../../Shared/SideMenu";
import { AppContext } from "../../../context/appcontext";
import moment from "moment";
import AverageHours from "../AnalysisComponentss/AverageSleptHours";
import AverageChart from "../AnalysisComponentss/AverageSleptHoursChart";
import axios from "axios";
import Spinner from "../../Shared/Spinner";
import AverageMoodsChart from "../AnalysisComponentss/AverageMoodLevels";
import DoughnutChart from "../AnalysisComponentss/AverageMoodLevelDoghnutChart";
import StackedBar from "../AnalysisComponentss/MoodStackBar";
import MultiAxis from "../AnalysisComponentss/MultAxisMoods";

const MoodsAnalysis = () => {
  const { user } = useContext(AppContext);
  const [hours_data, setHoursData] = useState(null);
  const [averageMoodsData, setAverageMoodsData] = useState(null);
  const [moodData, setMoodData] = useState(null);

  const getHoursSleptData = () => {
    axios
      .get(`http://localhost:3001/users/hours_data/${user.id}`)
      .then((response) => {
        setHoursData(response.data.sleepinghoursdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAverageMoodsData = () => {
    axios
      .get(`http://localhost:3001/users/average_mood_levels/${user.id}`)
      .then((response) => {
        setAverageMoodsData(response.data.averagemoodlevels);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMoodArrayData = () => {
    axios
      .get(`http://localhost:3001/users/mood_array_data/${user.id}`)
      .then((response) => {
        setMoodData(response.data.moodArrayData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHoursSleptData();
    getAverageMoodsData();
    getMoodArrayData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let nullChecker = hours_data === null;
  let nullCheckerMood = averageMoodsData === null;
  let nullCheckerMoodArrayData = moodData === null;
  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={200}>
          <Heading
            as="h1"
            size="sm"
            letterSpacing="wide"
            fontWeight="bold"
            color="purple"
            fontSize="30px"
            mb="30"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
          >
            <Text>
              {" "}
              <Text as="span" color="pink.400" fontSize="40px">
                Welcome {user.username},{" "}
              </Text>
              Here is your Mood Report
            </Text>

            <Badge colorScheme="purple" variant="subtle" width={390} p={2}>
              {" "}
              From {moment(user.created_at).utc().format("LL", "en")} -{" "}
              {moment().format("LL", "en")}
            </Badge>
          </Heading>
          <Box>
            {" "}
            <Flex direction="row" justifyContent="space-evenly" flexWrap="wrap">
              <AverageHours />
              {nullChecker ? (
                <Spinner />
              ) : (
                <AverageChart hours_data={hours_data} />
              )}
              {nullCheckerMood ? (
                <Spinner />
              ) : (
                <Flex>
                  <AverageMoodsChart averageMoodsData={averageMoodsData} />
                  <DoughnutChart averageMoodsData={averageMoodsData} />
                </Flex>
              )}

              {nullCheckerMoodArrayData ? (
                <Spinner />
              ) : (
                <MultiAxis moodData={moodData} />
              )}

              {/* <StackedBar /> */}
            </Flex>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default MoodsAnalysis;

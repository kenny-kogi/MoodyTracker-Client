import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../Home/Navbar/User/Navbar";
import {
  Flex,
  Container,
  Heading,
  Text,
  Badge,
  Box,
  Center,
} from "@chakra-ui/react";
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
import MoodDepressed from "../AnalysisComponentss/MoodDepressedChart";
import MoodAnxiety from "../AnalysisComponentss/MoodAnxietyChart";
import MoodElevated from "../AnalysisComponentss/MoodElevatedChart";
import MoodIrritability from "../AnalysisComponentss/MoodIrritabilityChart";
import AnxietyChart from "../AnalysisComponentss/CircularMoodCharts/AnxietyChart";

const MoodsAnalysis = () => {
  const { user } = useContext(AppContext);
  const [hours_data, setHoursData] = useState(null);
  const [averageMoodsData, setAverageMoodsData] = useState(null);
  const [moodData, setMoodData] = useState(null);
  const [depressedData, setDepressedData] = useState(null);
  const [anxietyData, setAnxietyData] = useState(null);
  const [irritabilityData, setIrritabilityData] = useState(null);
  const [elevatedData, setElevatedData] = useState(null);

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

  const getMoodDepressedData = () => {
    axios
      .get(`http://localhost:3001/users/mood_depressed_data/${user.id}`)
      .then((response) => {
        setDepressedData(response.data.moodDepressedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMoodAnxietyData = () => {
    axios
      .get(`http://localhost:3001/users/mood_anxiety_data/${user.id}`)
      .then((response) => {
        setAnxietyData(response.data.moodAnxietyData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMoodIrritabilityData = () => {
    axios
      .get(`http://localhost:3001/users/mood_irritability_data/${user.id}`)
      .then((response) => {
        setIrritabilityData(response.data.moodIrritabilityData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMoodElevatedData = () => {
    axios
      .get(`http://localhost:3001/users/mood_elevated_data/${user.id}`)
      .then((response) => {
        setElevatedData(response.data.moodElevatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHoursSleptData();
    getAverageMoodsData();
    getMoodArrayData();
    getMoodDepressedData();
    getMoodAnxietyData();
    getMoodIrritabilityData();
    getMoodElevatedData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let nullChecker = hours_data === null;
  let nullCheckerMood = averageMoodsData === null;
  let nullCheckerMoodArrayData = moodData === null;
  let nullCheckerDepressedData = depressedData === null;
  let nullCheckerAnxietyData = anxietyData === null;
  let nullCheckerIrritabilityData = irritabilityData === null;
  let nullCheckerElevatedData = elevatedData === null;

  console.log(elevatedData);
  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
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
            <Flex direction="row" flexWrap="wrap">
              <Box
                width={350}
                height={400}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mr={20}
              >
                <Center>
                  <AverageHours />
                </Center>
              </Box>
              <Box
                width={790}
                height={400}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
              >
                <Center>
                  {nullChecker ? (
                    <Spinner />
                  ) : (
                    <AverageChart hours_data={hours_data} />
                  )}
                </Center>
              </Box>
              <Box
                width={750}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
                mr={5}
              >
                <Center>
                  {nullCheckerMoodArrayData ? (
                    <Spinner />
                  ) : (
                    <StackedBar hours_data={hours_data} moodData={moodData} />
                  )}
                </Center>
              </Box>
              <Box
                width={450}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
              >
                <Center>
                  {nullCheckerMood ? (
                    <Spinner />
                  ) : (
                    <DoughnutChart averageMoodsData={averageMoodsData} />
                  )}
                </Center>
              </Box>
              <Box
                width={450}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mr={5}
                mt={10}
              >
                <Center>
                  {nullCheckerMood ? (
                    <Spinner />
                  ) : (
                    <AverageMoodsChart averageMoodsData={averageMoodsData} />
                  )}
                </Center>
              </Box>
              <Box
                width={750}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
                mr={5}
              >
                <Center>
                  {nullCheckerDepressedData ? (
                    <Spinner />
                  ) : (
                    <MoodDepressed depressedData={depressedData} />
                  )}
                </Center>
              </Box>
              <Box
                width={750}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
                mr={5}
              >
                <Center>
                  {nullCheckerAnxietyData ? (
                    <Spinner />
                  ) : (
                    <MoodAnxiety anxietyData={anxietyData} />
                  )}
                </Center>
              </Box>

              <Box
                width={450}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
              >
                <Center>
                  {nullCheckerAnxietyData ? (
                    <Spinner />
                  ) : (
                    <AnxietyChart anxietyAvg={anxietyData.anxietyAvg} />
                  )}
                </Center>
              </Box>

              <Box
                width={450}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
                mr={5}
              >
                <Center>
                  {nullCheckerElevatedData ? (
                    <Spinner />
                  ) : (
                    <AnxietyChart anxietyAvg={elevatedData.elevatedAvg} />
                  )}
                </Center>
              </Box>

              <Box
                width={750}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
              >
                <Center>
                  {nullCheckerElevatedData ? (
                    <Spinner />
                  ) : (
                    <MoodElevated elevatedData={elevatedData} />
                  )}
                </Center>
              </Box>

              <Box
                width={750}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
                mr={5}
              >
                <Center>
                  {nullCheckerIrritabilityData ? (
                    <Spinner />
                  ) : (
                    <MoodIrritability irritabilityData={irritabilityData} />
                  )}
                </Center>
              </Box>

              <Box
                width={450}
                height={450}
                border="1px solid purple.100"
                borderRadius={8}
                boxShadow="xl"
                borderWidth={2}
                mt={10}
                mr={5}
              >
                <Center>
                  {nullCheckerIrritabilityData ? (
                    <Spinner />
                  ) : (
                    <AnxietyChart
                      anxietyAvg={irritabilityData.irritabilityAvg}
                    />
                  )}
                </Center>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default MoodsAnalysis;

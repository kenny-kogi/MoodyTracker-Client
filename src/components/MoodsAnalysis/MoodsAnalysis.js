import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Home/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Divider,
  Flex,
  Container,
  Heading,
  Text,
  Badge,
  Box,
} from "@chakra-ui/react";
import SideMenu from "../LogMood/sidemenu/SideMenu";
import { AppContext } from "../../context/appcontext";
import moment from "moment";
import SleepingHoursChart from "./charts/SleepingHoursChart";
import { MoodContext } from "../../context/moodcontext";

const MoodsAnalysis = () => {
  const { user } = useContext(AppContext);
  const [moods, setMoods] = useState({});

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/moods/${id}`)
      .then((response) => {
        setMoods(response.data.moods);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MoodContext.Provider
        value={{
          moods,
        }}
      >
        <Navbar />
        <Divider border="2px solid" borderColor="purple.100" />
        <Flex>
          <SideMenu />
          <Container maxWidth="7xl" m={0} pt={5}>
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
              <SleepingHoursChart />{" "}
            </Box>
          </Container>
        </Flex>
      </MoodContext.Provider>
    </>
  );
};

export default MoodsAnalysis;

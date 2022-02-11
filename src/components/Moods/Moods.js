import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Divider, Flex, Box } from "@chakra-ui/react";
import SideMenu from "../LogMood/sidemenu/SideMenu";
import HoursChart from "./Charts/HoursChart";
import Weather from "./Charts/Weather";
import ColumnChart from "./Charts/ColumnChart";
import moment from "moment";

const Moods = () => {
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

  const isEmpty = Object.keys(moods).length === 0;

  return (
    <>
      <Navbar />
      <Divider border="2px solid" borderColor="purple.100" />
      <Flex>
        <SideMenu />
        <Container maxWidth="7xl" m={0} pt={5}>
          {isEmpty
            ? "No data"
            : moods.map((mood) => {
                return (
                  <>
                    <Box
                      textAlign="center"
                      bgColor="purple.100"
                      height={10}
                      mb={5}
                    >
                      Created on:{" "}
                      {moment(mood.created_at).utc().format("LLL", "en")}
                    </Box>
                    <Flex>
                      <HoursChart hours_slept={mood.hours_slept} />
                      <ColumnChart
                        anxiety_level={mood.anxiety}
                        depressed_level={mood.depressed}
                        irritability_level={mood.irritability_level}
                        elevated_level={mood.elevated_level}
                      />
                      <Weather weather={mood.weather} />
                    </Flex>
                  </>
                );
              })}
        </Container>
      </Flex>
    </>
  );
};

export default Moods;

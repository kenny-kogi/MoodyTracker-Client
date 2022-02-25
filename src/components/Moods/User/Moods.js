import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/User/Navbar";
import axios from "axios";
import { Container, Flex, Box, Center } from "@chakra-ui/react";
import SideMenu from "../../Shared/SideMenu";
import HoursChart from "../Charts/HoursChart";
import Weather from "../Charts/Weather";
import ColumnChart from "../Charts/ColumnChart";
import moment from "moment";
import { AppContext } from "../../../context/appcontext";
import Spinner from "../../Shared/Spinner";

const Moods = () => {
  const [moods, setMoods] = useState({});
  const { user } = useContext(AppContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/moods/${user.id}`)
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
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          {isEmpty ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            moods.map((mood) => {
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
            })
          )}
        </Container>
      </Flex>
    </>
  );
};

export default Moods;

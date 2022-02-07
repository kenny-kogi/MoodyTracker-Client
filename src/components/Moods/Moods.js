import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Divider, Flex, Box } from "@chakra-ui/react";
import SideMenu from "../LogMood/sidemenu/SideMenu";
import HoursChart from "./Charts/HoursChart";
import Weather from "./Charts/Weather";

const Moods = ({ loggedInStatus }) => {
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
  console.log("Moods", moods);

  return (
    <>
      <Navbar loggedInStatus={loggedInStatus} />
      <Divider border="2px solid" borderColor="purple.100" />
      <Flex>
        <SideMenu />
        <Container maxWidth="7xl" m={0} pt={5}>
          <Box textAlign="center" bgColor="purple.100" height={10} mb={5}>
            Created on: Wednesday, February, 2022
          </Box>
          <Flex>
            <HoursChart />
            <Weather weather={"rainy"} />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Moods;

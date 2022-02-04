import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Divider, Flex, Box } from "@chakra-ui/react";
import SideMenu from "../LogMood/sidemenu/SideMenu";

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
      <Flex flexDirection="row">
        <SideMenu />
        <Container maxWidth="7xl" m={0} pt={5}>
          <Box>
            <Box textAlign="center" alignItems="center">
              Created on: Wednesday, February, 2022
            </Box>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Moods;

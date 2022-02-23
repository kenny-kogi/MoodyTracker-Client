import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Home/Navbar/User/Navbar";
import {
  Divider,
  Flex,
  Container,
  Heading,
  Text,
  Badge,
  Box,
} from "@chakra-ui/react";
import SideMenu from "../Shared/SideMenu";
import { AppContext } from "../../context/appcontext";
import moment from "moment";
import AverageHours from "../MoodsAnalysis/AnalysisComponentss/AverageSleptHours";
import AverageChart from "../MoodsAnalysis/AnalysisComponentss/AverageSleptHoursChart";
import axios from "axios";
import Spinner from "../Shared/Spinner";

const MoodsAnalysis = () => {
  const { user } = useContext(AppContext);
  const [hours_data, setHoursData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/hours_data/${user.id}`)
      .then((response) => {
        setHoursData(response.data.sleepinghoursdata);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let nullChecker = hours_data === null;
  console.log(nullChecker);
  return (
    <>
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
            <Flex direction="row" justifyContent="space-evenly">
              <AverageHours />
              {nullChecker ? (
                <Spinner />
              ) : (
                <AverageChart hours_data={hours_data} />
              )}
            </Flex>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default MoodsAnalysis;

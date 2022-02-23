import React, { useContext } from "react";
import Navbar from "../Home/Navbar/User/Navbar";
import {
  Flex,
  Box,
  Heading,
  Image,
  Container,
  Divider,
  Text,
} from "@chakra-ui/react";
import ThanksImage from "../../assets/great.jpeg";
import SideMenu from "./SideMenu";
import { AppContext } from "../../context/appcontext";

const RecordMessage = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <Divider border="2px solid" borderColor="purple.100" />
      <Flex flexDirection="row">
        <SideMenu />

        <Container maxWidth="7xl" m={0} pt={5}>
          <Box mt={10} display="flex" justifyContent="center">
            {" "}
            <Flex flexDirection="column">
              <Heading
                as="h1"
                size="lg"
                letterSpacing="wide"
                fontWeight="bold"
                color="purple"
                fontSize="30px"
              >
                Thank You,
                <Text as="span" color="pink.400">
                  {" "}
                  {user.username}{" "}
                </Text>
                For Logging Your Mood
              </Heading>

              <Heading
                mt={5}
                as="h2"
                size="lg"
                letterSpacing="wide"
                fontWeight="bold"
                color="purple.600"
                fontSize="20px"
                textAlign="center"
              >
                Hope you come back Tommorrow
              </Heading>
              <Box display="flex" justifyContent="center" mt={10}>
                <Image src={ThanksImage} alt="Thank you" />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default RecordMessage;

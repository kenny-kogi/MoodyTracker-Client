import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import MoodRecord from "../../../assets/hero3.jpg";

const Service = () => {
  return (
    <>
      <Box pt="20">
        <Container maxWidth="container.xl">
          <Heading
            textAlign="center"
            as="h1"
            size="lg"
            letterSpacing="wide"
            fontWeight="bold"
            color="purple"
            fontSize="40px"
          >
            Features
          </Heading>

          <Box mt={10}>
            <Box display="flex" flexDirection="row">
              <Box>
                <Image
                  src={MoodRecord}
                  alt="record_mood"
                  height={300}
                  width={500}
                />
              </Box>

              <Container>
                <Heading
                  textAlign="center"
                  as="h1"
                  size="lg"
                  letterSpacing="small"
                  fontWeight="bold"
                  color="purple"
                  fontSize="20px"
                >
                  Intuitive mood tracking for Everyone
                </Heading>
                <Text
                  mt={10}
                  letterSpacing="wide"
                  lineHeight="taller"
                  fontSize="lg"
                  textAlign="center"
                >
                  Log valuable mood data including sleep, symptoms, and
                  medications quickly and easily with just a few taps.
                </Text>
              </Container>
            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Service;

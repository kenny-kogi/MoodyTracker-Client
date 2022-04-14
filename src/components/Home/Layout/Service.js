import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import MoodRecord from "../../../assets/hero3.jpg";
import Trigger from "../../../assets/hero7.jpg";
import Therapy from "../../../assets/hero4.jpg";

const Service = () => {
  return (
    <>
      <Box mt={20} id="features">
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

          <Box mt={10} flexDirection="column">
            <Box display="flex" flexDirection="row" mb={20}>
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
                  color="purple.600"
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
            <Box display="flex" flexDirection="row" mb={20}>
              <Container>
                <Heading
                  textAlign="center"
                  as="h1"
                  size="lg"
                  letterSpacing="small"
                  fontWeight="bold"
                  color="purple.600"
                  fontSize="20px"
                >
                  Identify triggers and patterns to help prevent relapses
                </Heading>
                <Text
                  mt={10}
                  letterSpacing="wide"
                  lineHeight="taller"
                  fontSize="lg"
                  textAlign="center"
                >
                  Easy to understand graphs reveal insightful revelations about
                  your mood changes and potential triggers.
                </Text>
              </Container>

              <Box>
                <Image
                  mr={40}
                  src={Trigger}
                  alt="record_mood"
                  height={300}
                  width={500}
                />
              </Box>
            </Box>

            <Box display="flex" flexDirection="row" mb={20}>
              <Box>
                <Image
                  src={Therapy}
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
                  color="purple.600"
                  fontSize="20px"
                >
                  Enhance your doctors' and therapy visits with data
                </Heading>
                <Text
                  mt={10}
                  letterSpacing="wide"
                  lineHeight="taller"
                  fontSize="lg"
                  textAlign="center"
                >
                  Share your tracked data directly with your Therapist/LCSW,
                  Psychologist, or Doctor to assist during sessions so you can
                  concentrate on treatment and not information recall.
                </Text>
              </Container>
            </Box>

            <Box></Box>
            <Box></Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Service;

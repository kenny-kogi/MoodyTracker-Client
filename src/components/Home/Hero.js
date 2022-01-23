import React from "react";
import {
  Container,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import HeroImage from "../../assets/hero6.jpg";
import "@fontsource/fredoka-one";
import "@fontsource/zen-maru-gothic";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box pt="20">
      <Container maxWidth="container.xl">
        <Box as="flex" alignItems="center" py="10" flexDirection="row">
          <Stack direction="row">
            <Box mr="" width="90%">
              <Heading as="h1" size="lg" letterSpacing="wide" fontStyle="">
                <Box
                  fontWeight="bold"
                  color="purple"
                  fontFamily="Fredoka One"
                  fontSize="70px"
                >
                  What is{" "}
                  <Text as="span" color="pink.400">
                    Moody
                  </Text>{" "}
                  Tracker?
                </Box>
              </Heading>

              <Box
                mt="5"
                letterSpacing="wide"
                lineHeight="taller"
                fontFamily="Zen Maru Gothic"
                fontSize="lg"
              >
                Moody Tracker is the easiest way to track your moods online or
                offline,it lets you easily chart your daily highs and lows,
                sleep, medications, and other symptoms related to Bipolar and
                other common mood disorders. Send printable reports to your
                doctor or therapist and receive valuable insights about your
                triggers and mood patterns.
              </Box>
              <Link to="/login">
                <Button
                  mt="35"
                  bg="pink.400"
                  color="white"
                  height="50px"
                  width="25%"
                  _hover={{ bg: "purple" }}
                >
                  Start Tracking
                </Button>
              </Link>
            </Box>

            <Box width="100%">
              <Image width="100%" src={HeroImage} alt="Hero" widtt="100%" />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

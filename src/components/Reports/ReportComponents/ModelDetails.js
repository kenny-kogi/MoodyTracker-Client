import React, { useState, useEffect } from "react";
import SideMenu from "../../Shared/Admin/SideMenu";
import { Container, Flex, Heading, Text, Tag } from "@chakra-ui/react";
import Navbar from "../../Home/Navbar/Admin/Navbar";
import { useParams } from "react-router";
import axios from "axios";

const ModelDetails = () => {
  const { person, id } = useParams();
  const [currentLogged, setCurrentLogged] = useState(null);

  const getCurrentLoggedDetails = () => {
    axios
      .get(`http://localhost:3001/${person}/${id}`)
      .then((response) => {
        setCurrentLogged(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(person);
  useEffect(() => {
    getCurrentLoggedDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(currentLogged);

  // let nullCurrentLoggedChecker
  return (
    <>
      <SideMenu />
      <Container maxWidth="1339px" mr={0}>
        <Flex>
          <Navbar />
          <Flex direction="column" mt="110px" ml={5}>
            <Heading
              as="h1"
              size="sm"
              letterSpacing="wide"
              fontWeight="bold"
              color="purple"
              fontSize="25px"
              mb="30"
            >
              Hello, here is{" "}
              <Text as="span" color="pink.400" fontSize="25px">
                {currentLogged?.username}
              </Text>{" "}
              Details
            </Heading>
            <Flex direction="row" flexWrap="wrap">
              <Flex justifyContent="space-between" width={1200}>
                <Flex gap={5} fontSize="20px">
                  <Tag fontSize="20px">First Name: </Tag>
                  <Text> {currentLogged?.firstName}</Text>
                </Flex>
                <Flex gap={5} fontSize="20px">
                  <Tag fontSize="20px">Last Name: </Tag>
                  <Text> {currentLogged?.lastName}</Text>
                </Flex>
                <Flex gap={5} fontSize="20px">
                  <Tag fontSize="20px">User Name: </Tag>
                  <Text> {currentLogged?.username}</Text>
                </Flex>
              </Flex>
              <Flex justifyContent="space-between" width={1200} mt={10}>
                <Flex gap={5} fontSize="20px">
                  <Tag fontSize="20px">Gender: </Tag>
                  <Text> {currentLogged?.gender}</Text>
                </Flex>
                <Flex gap={5} fontSize="20px">
                  <Tag fontSize="20px">Location: </Tag>
                  <Text> {currentLogged?.location}</Text>
                </Flex>
                <Flex gap={5} fontSize="20px">
                  <Tag fontSize="20px">Age: </Tag>
                  <Text> {currentLogged?.age}</Text>
                </Flex>
              </Flex>
              <Flex width={1200} mt={10}>
                <Flex gap={5} fontSize="20px" mr="300px">
                  <Tag fontSize="20px">Email: </Tag>
                  <Text> {currentLogged?.email}</Text>
                </Flex>
                <Flex gap={5} fontSize="20px">
                  <Tag fontSize="20px">Occupation: </Tag>
                  <Text> {currentLogged?.occupation}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default ModelDetails;

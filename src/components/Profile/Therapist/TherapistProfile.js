import React, { useState, useContext } from "react";
import { AppContext } from "../../../context/appcontext";
import axios from "axios";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/SideMenu";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";
import Errors from "../../Shared/Errors";
import Form from "../Form/Therapist/Form";
import { useToast } from "@chakra-ui/react";

const TherapistProfile = () => {
  const { therapist, handleLoginTherapist } = useContext(AppContext);
  const [editTherapist, setEditTherapist] = useState({
    id: therapist.id,
    firstName: therapist.firstName,
    lastName: therapist.lastName,
    username: therapist.username,
    email: therapist.email,
    location: therapist.location,
    gender: therapist.gender,
    specialization: therapist.specialization,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditTherapist({
      ...editTherapist,
      [name]: value,
    });
  };
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    let therapist = editTherapist;

    axios
      .put(
        `http://localhost:3001/therapists/${therapist.id}`,
        { therapist },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "updated") {
          handleLoginTherapist(response.data);
          toast({
            title: "Details Edited",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
            containerStyle: {
              backgroundColor: "purple",
            },
          });
        } else {
          toast({
            title: "Error !!",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
            containerStyle: {
              backgroundColor: "purple",
            },
          });

          setErrors({
            ...errors,
            errors: response.data.errors,
          });
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          <Heading
            as="h1"
            size="sm"
            letterSpacing="wide"
            fontWeight="bold"
            color="purple"
            fontSize="30px"
            mb="30"
          >
            <Text as="span" color="pink.400" fontSize="40px">
              Hi {therapist.username},{" "}
            </Text>
            Change Your Profile
          </Heading>
          {isEmpty ? null : <Errors errors={errors.errors} />}
          <Form
            therapist={editTherapist}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Container>
      </Flex>
    </>
  );
};
export default TherapistProfile;

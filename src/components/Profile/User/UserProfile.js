import React, { useContext, useState } from "react";
import Navbar from "../../Home/Navbar/User/Navbar";
import { AppContext } from "../../../context/appcontext";
import { useToast, Flex, Container, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import SideMenu from "../../Shared/SideMenu";
import Errors from "../../Shared/Errors";
import Form from "../Form/User/Form";

const UserProfile = () => {
  const { user, handleLogin } = useContext(AppContext);
  const [editUser, setEditUser] = useState({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    location: user.location,
    age: user.age,
    occupation: user.occupation,
    gender: user.gender,
    image: user.image,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  const handleChangeAgeInput = (v) => {
    setEditUser({
      ...editUser,
      age: v,
    });
  };

  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = editUser;

    axios
      .put(
        `http://localhost:3001/users/${user.id}`,
        { user },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "updated") {
          handleLogin(response.data);
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
              Hi {user.username},{" "}
            </Text>
            Change Your Profile
          </Heading>
          {isEmpty ? null : <Errors errors={errors.errors} />}
          <Form
            user={editUser}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleChangeAgeInput={handleChangeAgeInput}
          />
        </Container>
      </Flex>
    </>
  );
};

export default UserProfile;

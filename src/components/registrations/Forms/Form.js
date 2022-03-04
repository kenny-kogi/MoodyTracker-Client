import React from "react";
import {
  Box,
  FormControl,
  Grid,
  Image,
  GridItem,
  FormLabel,
  Input,
  Select,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import SignupImage from "../../../assets/signup1.png";
import LogImage from "../../../assets/login1.png";

const Form = ({
  handleFileUpload,
  handleChange,
  handleSubmit,
  user,
  isSignup,
}) => {
  return (
    <Box py="30" ml="20">
      <Stack direction="row" justifyContent="space-evenly">
        <Box width="45%">
          <Heading color="purple">
            {isSignup ? "User Sign Up" : "User Login"}
          </Heading>
          {isSignup ? (
            <form onSubmit={handleSubmit}>
              <Grid templateColumns="repeat(3, 1fr )" mt="15">
                <GridItem colSpan={1} mr="6">
                  <FormControl>
                    <FormLabel htmlFor="firstName">First Name:</FormLabel>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="FirstName"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="lastName"
                      value={user.lastName}
                      name="lastName"
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1} mr="6">
                  <FormControl>
                    <FormLabel htmlFor="username">Username:</FormLabel>
                    <Input
                      id="username"
                      type="text"
                      placeholder="UserName"
                      value={user.username}
                      name="username"
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={3} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1} mr="6">
                  <FormControl>
                    <FormLabel htmlFor="location">Location:</FormLabel>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Nairobi"
                      value={user.location}
                      name="location"
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="age">Age:</FormLabel>
                    <Input
                      id="age"
                      type="date"
                      placeholder=""
                      value={user.age}
                      name="age"
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1} mr="6">
                  <FormControl>
                    <FormLabel htmlFor="occupation">occupation:</FormLabel>
                    <Input
                      id="occupation"
                      type="text"
                      placeholder="Nurse"
                      value={user.occupation}
                      name="occupation"
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="gender">Gender:</FormLabel>
                    <Select
                      id="gender"
                      placeholder="Select Gender"
                      value={user.gender}
                      name="gender"
                      onChange={handleChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2} mr="6">
                  <FormControl>
                    <FormLabel htmlFor="image">Profile Image:</FormLabel>
                    <Input
                      id="image"
                      type="file"
                      name="image"
                      onChange={handleFileUpload}
                      accept="image/jpeg"
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <Input
                      id="password"
                      type="password"
                      value={user.password}
                      onChange={handleChange}
                      name="password"
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="password_confirmation">
                      Confirm Password:
                    </FormLabel>
                    <Input
                      id="password_confirmation"
                      type="password"
                      value={user.password_confirmation}
                      onChange={handleChange}
                      name="password_confirmation"
                    />
                  </FormControl>
                </GridItem>
              </Grid>

              <Button
                type="submit"
                mt="35"
                bg="pink.400"
                color="white"
                height="50px"
                width="25%"
                _hover={{ bg: "purple" }}
                fontWeight="bold"
              >
                Sign Up
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <Grid templateColumns="repeat(3, 1fr )" mt="15">
                <GridItem colSpan={3}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="firstName">User Name:</FormLabel>
                    <Input
                      id="username"
                      type="text"
                      placeholder="username"
                      name="username"
                      value={user.username}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={3} mt="6">
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <Input
                      id="email"
                      type="text"
                      placeholder="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={3} mt="6">
                  <FormControl isRequired>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={3} mt="6">
                  <Button
                    type="submit"
                    mt="35"
                    bg="pink.400"
                    color="white"
                    height="50px"
                    width="25%"
                    _hover={{ bg: "purple" }}
                    fontWeight="bold"
                  >
                    Log in
                  </Button>
                </GridItem>
              </Grid>
            </form>
          )}
        </Box>
        <Box>
          <Image src={isSignup ? SignupImage : LogImage} boxSize="400px" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Form;

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

const Form = ({
  username,
  email,
  password,
  password_confirmation,
  handleChange,
  handleSubmit,
  firstName,
  lastName,
  image_url,
  gender,
  age,
  location,
  occupation,
}) => {
  return (
    <Box py="30" ml="20">
      <Stack direction="row" justifyContent="space-evenly">
        <Box width="45%">
          <Heading color="purple">Sign up</Heading>
          <form>
            <Grid templateColumns="repeat(3, 1fr )" mt="15">
              <GridItem colSpan={1} mr="6">
                <FormControl>
                  <FormLabel htmlFor="firstName">First Name:</FormLabel>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    value={firstName}
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
                    value={lastName}
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
                    value={username}
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
                    value={email}
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
                    value={location}
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
                    value={age}
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
                    value={occupation}
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
                    value={gender}
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
                  <FormLabel htmlFor="imageurl">Profile Image:</FormLabel>
                  <Input
                    id="imageurl"
                    type="file"
                    value={image_url}
                    name="image_url"
                    onChange={handleChange}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2} mb="2" mr="6">
                <FormControl>
                  <FormLabel htmlFor="password">Password:</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    value={password}
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
                    value={password_confirmation}
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
              onSubmit={handleSubmit}
            >
              Sign Up
            </Button>
          </form>
        </Box>
        <Box>
          <Image src={SignupImage} boxSize="400px" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Form;

import React from "react";
import {
  Box,
  Grid,
  GridItem,
  FormControl,
  Input,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";

const Form = ({ handleChange, handleSubmit, therapist }) => {
  return (
    <Box>
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
                value={therapist.firstName}
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
                value={therapist.lastName}
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
                value={therapist.username}
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
                value={therapist.email}
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
                value={therapist.location}
                name="location"
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mr="6">
            <FormControl>
              <FormLabel htmlFor="sp">specialization:</FormLabel>
              <Input
                id="specialization"
                type="text"
                placeholder="Specialization"
                value={therapist.specialization}
                name="specialization"
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
                value={therapist.gender}
                name="gender"
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </Select>
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
          Edit
        </Button>
      </form>
    </Box>
  );
};

export default Form;

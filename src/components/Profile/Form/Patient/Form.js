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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const Form = ({
  handleChange,
  handleFileUpload,
  handleSubmit,
  patient,
  therapists,
  handleChangeAgeInput,
}) => {
  const nullCheckerTherapist = therapists === null;
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
                value={patient.firstName}
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
                value={patient.lastName}
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
                value={patient.username}
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
                value={patient.email}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mb="2" mr="6">
            <FormControl>
              <FormLabel htmlFor="age">Age:</FormLabel>
              <NumberInput
                min={12}
                max={120}
                name="age"
                onChange={(v) => handleChangeAgeInput(v)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mr="6">
            <FormControl>
              <FormLabel htmlFor="location">Location:</FormLabel>
              <Input
                id="location"
                type="text"
                placeholder="Nairobi"
                value={patient.location}
                name="location"
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
                value={patient.occupation}
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
                value={patient.gender}
                name="gender"
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </Select>
            </FormControl>
          </GridItem>

          {/* <GridItem colSpan={2} mr="6">
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
          </GridItem> */}

          <GridItem colSpan={1} mb="2" mr="6">
            <FormControl>
              <FormLabel htmlFor="mental_health_status">
                Mental Health Status:
              </FormLabel>
              <Select
                id=" mental_health_status"
                placeholder="Select Ment Status"
                value={patient.mental_health_status}
                name="mental_health_status"
                onChange={handleChange}
              >
                <option>Mild</option>
                <option>Severe</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mr="6">
            <FormControl>
              <FormLabel htmlFor="mental_health_facility">
                Mental Health Facilty:
              </FormLabel>
              <Input
                id="mental_health_facility"
                type="text"
                placeholder="Mental health Facility"
                value={patient.mental_health_facility}
                name="mental_health_facility"
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3} mb="2" mr="6">
            <FormControl>
              <FormLabel htmlFor="mental_health_status">Therapist:</FormLabel>
              <Select
                id="therapist_id"
                placeholder="Select Therapist"
                value={patient.therapist_id}
                name="therapist_id"
                onChange={handleChange}
              >
                {nullCheckerTherapist ? (
                  <option>No therapist</option>
                ) : (
                  therapists.map((therapist) => {
                    return (
                      <option value={therapist.id}>{therapist.username}</option>
                    );
                  })
                )}
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1} mb="2" mr="6">
            <FormControl>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                id="password"
                type="password"
                value={patient.password}
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
                value={patient.password_confirmation}
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
          Edit
        </Button>
      </form>
    </Box>
  );
};

export default Form;

import React, { useContext, useState } from "react";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import SideMenu from "../../Shared/Patient/SideMenu";
import {
  Flex,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { AppContext } from "../../../context/appcontext";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const MedicationLog = () => {
  const { patient } = useContext(AppContext);
  const [medication, setMedication] = useState({
    drug_name: "",
    prescription: "",
    usage_interval: 0,
    patient_id: patient.id,
  });
  const [errors, setErrors] = useState({
    errors: {},
  });
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/medications", medication, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status === "created") {
          toast({
            title: "Medication Logged",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
            containerStyle: {
              backgroundColor: "purple",
            },
          });
          setMedication({
            ...medication,
            drug_name: "",
            prescription: "",
            usage_interval: 0,
          });
        } else {
          setErrors({ ...errors, errors: response.data.errors });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMedication({
      ...medication,
      [name]: value,
    });
  };

  console.log("Medication", medication);
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
            justifyContent="center"
          >
            <Text as="span" color="pink.400" fontSize="40px">
              Hi {patient.username},{" "}
            </Text>
            Let's Log Your Medication Today
          </Heading>
          <Box width={800}>
            <form onSubmit={handleSubmit}>
              <Grid templateColumns="repeat(3, 1fr )" mt="15">
                <GridItem colSpan={3} mr="6">
                  <FormControl>
                    <FormLabel htmlFor="drug_name">Drug Name:</FormLabel>
                    <Input
                      id="drug_name"
                      type="text"
                      placeholder="Drug Name"
                      name="drug_name"
                      value={medication.drug_name}
                      onChange={handleChange}
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={3} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="prescription">prescription:</FormLabel>
                    <Textarea
                      id="prescription"
                      type="text"
                      placeholder="Prescription"
                      name="prescription"
                      value={medication.prescription}
                      onChange={handleChange}
                      height="100px"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={3} mb="2" mr="6">
                  <FormControl>
                    <FormLabel htmlFor="usage_interval">
                      Usage Interval:
                    </FormLabel>
                    {/* <Textarea
                      id="usage_interval"
                      type="text"
                      placeholder="Usage Interval"
                      name="usage_interval"
                      value={medication.usage_interval}
                      onChange={handleChange}
                      height="100px"
                    /> */}
                    <NumberInput
                      //   value={medication.usage_interval}
                      min={0}
                      max={8}
                      onChange={(v) =>
                        setMedication({ ...medication, usage_interval: v })
                      }
                      name="usage_interval"
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
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
                LOG MEDICATION
              </Button>
            </form>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default MedicationLog;

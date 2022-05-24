import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import SideMenu from "../../Shared/Patient/SideMenu";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";
import { AppContext } from "../../../context/appcontext";
import axios from "axios";
import Form from "../Form/Patient/Form";
import Errors from "../../Shared/Errors";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const PatientProfile = () => {
  let toast = useToast();
  let navigate = useNavigate();
  const { patient, isLoggedInPatient, handleLoginPatient } =
    useContext(AppContext);
  const [therapist, setTherapist] = useState(null);
  const [editpatient, setEditPatient] = useState({
    id: patient.id,
    firstName: patient.firstName,
    lastName: patient.lastName,
    username: patient.username,
    email: patient.email,
    password: "",
    password_confirmation: "",
    location: patient.location,
    image_url: null,
    age: patient.age,
    occupation: patient.occupation,
    gender: patient.gender,
    mental_health_status: patient.mental_health_status,
    mental_health_facility: patient.mental_health_facility,
    therapist_id: patient.therapist_id,
  });

  const [errors, setErrors] = useState({});

  const checkAuthorized = () => {
    if (!isLoggedInPatient) {
      navigate("/");
      toast({
        title: "Not Authorized",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "purple",
        },
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditPatient({
      ...editpatient,
      [name]: value,
    });
  };

  const handleFileUpload = (event) => {
    setEditPatient({
      ...editpatient,
      image: event.target.files[0],
    });
  };

  const handleChangeAgeInput = (v) => {
    setEditPatient({
      ...editpatient,
      age: v,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let patient = editpatient;
    console.log("edit patient", patient);
    console.log("id", patient.id);
    axios
      .put(
        `http://localhost:3001/patients/${patient.id}`,
        { patient },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "updated") {
          handleLoginPatient(response.data);
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

  const getTherapistData = () => {
    axios
      .get("http://localhost:3001/therapists")
      .then((response) => {
        setTherapist(response.data.therapists);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkAuthorized();
    getTherapistData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              Hi {patient.username},{" "}
            </Text>
            Change Your Profile
          </Heading>
          {isEmpty ? null : <Errors errors={errors.errors} />}
          <Form
            patient={editpatient}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleFileUpload={handleFileUpload}
            isSignup={true}
            therapists={therapist}
            handleChangeAgeInput={handleChangeAgeInput}
          />
        </Container>
      </Flex>
    </>
  );
};

export default PatientProfile;

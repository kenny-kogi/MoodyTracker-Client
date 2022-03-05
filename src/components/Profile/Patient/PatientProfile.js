import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import SideMenu from "../../Shared/Patient/SideMenu";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Form from "../Form/Form";
import Errors from "../../Shared/Errors";

const Profile = () => {
  const { patient, handleLoginPatient } = useContext(AppContext);
  const [therapist, setTherapist] = useState(null);
  const [editpatient, setEditPatient] = useState({
    id: patient.id,
    firstName: patient.firstName,
    lastName: patient.lastName,
    username: patient.username,
    email: patient.email,
    // password: "",
    // password_confirmation: "",
    location: patient.location,
    image: null,
    age: patient.age,
    occupation: patient.occupation,
    gender: patient.gender,
    mental_health_status: patient.mental_health_status,
    mental_health_facility: patient.mental_health_facility,
    therapist_id: patient.therapist_id,
  });

  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

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
        console.log("res", response);
        if (response.data.status === "updated") {
          handleLoginPatient(response.data);
          navigate("/patient/mood/record");
        } else {
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
    getTherapistData();
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
          />
        </Container>
      </Flex>
    </>
  );
};

export default Profile;

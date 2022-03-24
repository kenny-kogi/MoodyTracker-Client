import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import Form from "../Forms/Patient/Form";
import Errors from "../../Shared/Errors";
import { useToast } from "@chakra-ui/react";

const PatientSignup = () => {
  const { handleLoginPatient } = useContext(AppContext);
  const [therapist, setTherapist] = useState(null);
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    location: "",
    image: null,
    age: null,
    occupation: "",
    gender: "",
    mental_health_status: "",
    mental_health_facility: "",
    therapist_id: null,
  });

  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatient({
      ...patient,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleFileUpload = (event) => {
    setPatient({
      ...patient,
      image: event.target.files[0],
    });
  };

  const handleChangeAgeInput = (v) => {
    setPatient({
      ...patient,
      age: v,
    });
  };

  let toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/patients",
        { patient },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleLoginPatient(response.data);
          navigate("/patient/mood/record");
          toast({
            title: "Account Created",
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
    getTherapistData();
  }, []);

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <div>
      <Navbar />
      {isEmpty ? null : <Errors errors={errors.errors} />}
      <Form
        patient={patient}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
        isSignup={true}
        therapists={therapist}
        handleChangeAgeInput={handleChangeAgeInput}
      />
    </div>
  );
};

export default PatientSignup;

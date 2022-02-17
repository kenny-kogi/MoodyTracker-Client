import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../../Home/Navbar/Navbar";
import Form from "../Forms/Patient/Form";

const PatientSignup = () => {
  const { handleLoginPatient } = useContext(AppContext);
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

  const [errors, setErrors] = useState({
    errors: {},
  });

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

  const handleErrors = () => {
    const isEmpty = Object.keys(patient.errors).length === 0;
    return (
      <div>
        <ul>
          {isEmpty
            ? ""
            : patient.errors.map((error) => {
                return <li key={error}>{error}</li>;
              })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Navbar signup={true} />
      <Form
        patient={patient}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
        isSignup={true}
      />
      <div>{patient.errors ? handleErrors() : null}</div>
    </div>
  );
};

export default PatientSignup;

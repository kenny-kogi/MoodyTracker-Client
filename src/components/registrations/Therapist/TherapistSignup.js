import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import Form from "../Forms/Therapist/Form";
import axios from "axios";
import Errors from "../../Shared/Errors";

const TherapistSignup = () => {
  const { handleLoginTherapist } = useContext(AppContext);
  const [therapist, setTherapist] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    location: "",
    image: null,
    gender: "",
    specialization: "",
  });

  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTherapist({
      ...therapist,
      [name]: value,
    });
  };

  const handleFileUpload = (event) => {
    setTherapist({
      ...therapist,
      image: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(therapist);
    axios
      .post(
        "http://localhost:3001/therapists",
        { therapist },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleLoginTherapist(response.data);
          navigate("/therapist/dashboard");
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

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <div>
      <Navbar />
      <Form
        therapist={therapist}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
        isSignup={true}
      />
      {isEmpty ? null : <Errors errors={errors.errors} />}
    </div>
  );
};

export default TherapistSignup;

import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Form from "../Forms/Patient/Form";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import Errors from "../../Shared/Errors";
const PatientLogin = () => {
  const { isLoggedInPatient, handleLoginPatient } = useContext(AppContext);

  const [patient, setPatient] = useState({
    username: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    return isLoggedInPatient ? navigate("/") : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/patient/login",
        { patient },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleLoginPatient(response.data);
          navigate("/patient/mood/record");
        } else {
          setErrors({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <>
      <div>
        <Navbar patient={true} />
        {isEmpty ? null : <Errors errors={errors.errors} />}
        <Form
          patient={patient}
          isSignup={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default PatientLogin;

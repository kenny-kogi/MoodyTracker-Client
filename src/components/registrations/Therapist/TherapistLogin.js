import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Form from "../Forms/Therapist/Form";
import Navbar from "../../Home/Navbar/Therapist/Navbar";

const TherapistLogin = () => {
  const { isLoggedInTherapist, handleLoginTherapist } = useContext(AppContext);

  const [therapist, setTherapist] = useState({
    username: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({
    errors: {},
  });

  let navigate = useNavigate();

  useEffect(() => {
    return isLoggedInTherapist ? navigate("/") : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTherapist({
      ...therapist,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/therapist/login",
        { therapist },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleLoginTherapist(response.data);
          navigate("/therapist/dashboard");
        } else {
          setErrors({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleErrors = () => {
    const isEmpty = Object.keys(therapist.errors).length === 0;
    return (
      <div>
        <ul>
          {isEmpty
            ? ""
            : therapist.errors.map((error) => {
                return <li key={error}>{error}</li>;
              })}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div>
        <Navbar therapist={true} />
        <Form
          therapist={therapist}
          isSignup={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <div>{therapist.errors ? handleErrors() : null}</div>
      </div>
    </>
  );
};

export default TherapistLogin;

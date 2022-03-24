import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Form from "../Forms/Therapist/Form";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import Errors from "../../Shared/Errors";
import { useToast } from "@chakra-ui/react";

const TherapistLogin = () => {
  const { isLoggedInTherapist, handleLoginTherapist } = useContext(AppContext);

  const [therapist, setTherapist] = useState({
    username: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});
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

  let toast = useToast();

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
          toast({
            title: "Successfully Logged",
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
        <Navbar therapist={true} />
        {isEmpty ? null : <Errors errors={errors.errors} />}
        <Form
          therapist={therapist}
          isSignup={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default TherapistLogin;

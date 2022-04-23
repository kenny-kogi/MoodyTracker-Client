import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Home/Navbar/User/Navbar";
import Form from "../Forms/Form";
import { AppContext } from "../../../context/appcontext";
import Errors from "../../Shared/Errors";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  const { handleLogin } = useContext(AppContext);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    location: "",
    image_url: null,
    age: null,
    occupation: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleFileUpload = (event) => {
    setUser({
      ...user,
      image: event.target.files[0],
    });
  };

  const handleChangeAgeInput = (v) => {
    setUser({
      ...user,
      age: v,
    });
  };
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          handleLogin(response.data);
          navigate("/mood/record");
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

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <div>
      <Navbar />
      {isEmpty ? null : <Errors errors={errors.errors} />}
      <Form
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
        isSignup={true}
        handleChangeAgeInput={handleChangeAgeInput}
      />
    </div>
  );
};

export default Signup;

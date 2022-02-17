import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Home/Navbar/Navbar";
import Form from "./Forms/Form";
import { AppContext } from "../../context/appcontext";

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
    image: null,
    age: null,
    occupation: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    errors: {},
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          handleLogin(response.data);
          navigate("/mood/record");
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
    const isEmpty = Object.keys(user.errors).length === 0;
    return (
      <div>
        <ul>
          {isEmpty
            ? ""
            : user.errors.map((error) => {
                return <li key={error}>{error}</li>;
              })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Navbar user={true} />
      <Form
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
        isSignup={true}
      />
      <div>{user.errors ? handleErrors() : null}</div>
    </div>
  );
};

export default Signup;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../Home/Navbar/Navbar";
import Form from "./Forms/Form";

const Login = ({ handleLogin, loggedInStatus }) => {
  const [user, setUser] = useState({
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
    console.log("redirect");
    return loggedInStatus ? navigate.push("/") : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:3001/user/login",
        { user },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response.data);
          navigate("/mood/record");
        } else {
          setErrors({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log(error));
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
      <Navbar login={true} />
      <Form
        user={user}
        isSignup={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <div>{user.errors ? handleErrors() : null}</div>
    </div>
  );
};

export default Login;

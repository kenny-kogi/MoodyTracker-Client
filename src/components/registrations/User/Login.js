import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../../Home/Navbar/User/Navbar";
import Form from "../Forms/Form";
import { AppContext } from "../../../context/appcontext";
import Errors from "../../Shared/Errors";

const Login = () => {
  const { handleLogin, isLoggedIn } = useContext(AppContext);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    return isLoggedIn ? navigate("/") : null;
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

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <>
      <Navbar user={true} />
      {isEmpty ? null : <Errors errors={errors.errors} />}
      <Form
        user={user}
        isSignup={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default Login;

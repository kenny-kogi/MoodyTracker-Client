import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Home/Navbar/Navbar";
import Form from "./Forms/Form";

const Signup = ({ handleLogin }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    location: "",
    age: "",
    occupation: "",
    gender: "",
    image_url: "",
    errors: {},
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling submit");

    axios
      .post("http://localhost:3001/users", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          handleLogin(response.data);
          navigate("/");
        } else {
          setUser({
            ...user,
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
      <Navbar />
      <Form
        firstName={user.firstName}
        lastName={user.lastName}
        location={user.location}
        occupation={user.occupation}
        gender={user.gender}
        age={user.age}
        image_url={user.image_url}
        username={user.username}
        email={user.email}
        password={user.password}
        password_confirmation={user.password_confirmation}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>{user.errors ? handleErrors() : null}</div>
    </div>
  );
};

export default Signup;

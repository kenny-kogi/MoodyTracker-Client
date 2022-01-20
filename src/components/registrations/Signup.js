import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleLogin }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    errors: {},
  });

  let navigate = useNavigate();

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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={user.password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
      <div>{user.errors ? handleErrors() : null}</div>
    </div>
  );
};

export default Signup;

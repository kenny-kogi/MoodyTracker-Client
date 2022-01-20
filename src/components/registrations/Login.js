import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ handleLogin, loggedInStatus }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    errors: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    console.log("redirect");
    return loggedInStatus ? navigate.push("/") : null;
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
          navigate("/");
        } else {
          setUser({
            ...user,
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
      <h1>Log In</h1>{" "}
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
        />{" "}
        <button placeholder="submit" type="submit">
          Log In
        </button>{" "}
        <div>
          or <Link to="/signup">sign up</Link>
        </div>
      </form>
      <div>{user.errors ? handleErrors() : null}</div>
    </div>
  );
};

export default Login;

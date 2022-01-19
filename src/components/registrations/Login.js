import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ handleLogin, loggedInStatus }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    return loggedInStatus ? this.redirect() : null;
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("not working");
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post(
        "http://localhost:3001/user/login",
        { user },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response.data);
          redirect();
        } else {
          setErrors(response.data.errors);
        }
      })
      .catch((error) => console.log(error));
  };

  const redirect = () => {
    this.props.history.push("/");
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {errors.map((error) => {
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
          value={username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />{" "}
        <button placeholder="submit" type="submit">
          Log In
        </button>{" "}
        <div>
          or <Link to="/signup">sign up</Link>
        </div>
      </form>
      <div>{errors ? handleErrors() : null}</div>
    </div>
  );
};

export default Login;

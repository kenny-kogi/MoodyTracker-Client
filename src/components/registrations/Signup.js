import React, { useState } from "react";
import axios from "axios";

const Signup = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "password_confirmation") {
      setPasswordConfirmation(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    axios
      .post("http://localhost:3001/users", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          console.log(response);
          console.log(response.data);
          handleLogin(response.data);
          redirect();
        } else {
          setErrors(response.data.errors);
          console.log(response.data.errors);
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const redirect = () => {
    this.props.history.push("/");
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {errors.map((error) => {
            return (
              <li>
                key={error} {error}
              </li>
            );
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
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
      <div>{errors ? handleErrors() : null}</div>
    </div>
  );
};

export default Signup;

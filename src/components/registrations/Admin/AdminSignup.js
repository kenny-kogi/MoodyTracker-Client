import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../../Home/Navbar/Admin/Navbar";
import Form from "../Forms/Admin/Form";
import Errors from "../../Shared/Errors";

const AdminSignup = () => {
  const { handleLoginAdmin } = useContext(AppContext);

  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/admins",
        { admin },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleLoginAdmin(response.data);
          navigate("/reports");
          console.log("success");
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

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <div>
      <Navbar />
      {isEmpty ? null : <Errors errors={errors.errors} />}
      <Form
        patient={admin}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSignup={true}
      />
    </div>
  );
};

export default AdminSignup;

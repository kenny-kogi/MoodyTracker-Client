import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";
import axios from "axios";
import Form from "../Forms/Admin/Form";
import Navbar from "../../Home/Navbar/Admin/Navbar";
import Errors from "../../Shared/Errors";
import { useToast } from "@chakra-ui/react";
const AdminLogin = () => {
  const { isLoggedInAdmin, handleLoginAdmin } = useContext(AppContext);

  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    return isLoggedInAdmin ? navigate("/") : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAdmin({
      ...admin,
      [name]: value,
    });
  };
  let toast = useToast();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/admin/login",
        { admin },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleLoginAdmin(response.data);
          navigate("/reports");
          toast({
            title: "Successfully Logged",
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
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const isEmpty = Object.keys(errors).length === 0;

  return (
    <>
      <div>
        <Navbar />
        {isEmpty ? null : <Errors errors={errors.errors} />}
        <Form
          patient={admin}
          isSignup={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default AdminLogin;

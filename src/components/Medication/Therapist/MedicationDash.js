import React, { useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import SideMenu from "../../Shared/Therapist/PatientAnalysis/SideMenu";
import { Flex, Container } from "@chakra-ui/react";
import { useParams } from "react-router";
import axios from "axios";

const MedicationDash = () => {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [medications, setMedications] = useState(null);
  const getPatientMedications = () => {
    axios
      .get(`http://localhost:3001/patient/medication/${id}`)
      .then((response) => {
        if (response.data.status === "created") {
          setMedications(response.data.medications);
        } else {
          setErrors({ ...errors, errors: response.data.errors });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPatientMedications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(medications);

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}></Container>
      </Flex>
    </>
  );
};

export default MedicationDash;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Flex, Container } from "@chakra-ui/react";
import SideMenu from "../../Shared/Therapist/PatientAnalysis/SideMenu";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import Moods from "../DailyLog/Moods";

const TherapistLog = () => {
  const { id } = useParams();
  const [moods, setMoods] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/moods/patient/${id}`)
      .then((response) => {
        setMoods(response.data.moods);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          <Moods moods={moods} />
        </Container>
      </Flex>
    </>
  );
};

export default TherapistLog;

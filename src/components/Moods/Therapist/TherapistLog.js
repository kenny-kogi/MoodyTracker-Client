import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Flex, Container, useToast } from "@chakra-ui/react";
import SideMenu from "../../Shared/Therapist/PatientAnalysis/SideMenu";
import Navbar from "../../Home/Navbar/Therapist/Navbar";
import Moods from "../DailyLog/Moods";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";

const TherapistLog = () => {
  const { isLoggedInTherapist } = useContext(AppContext);
  const { id } = useParams();
  const [moods, setMoods] = useState({});

  let navigate = useNavigate();
  let toast = useToast();

  const checkAuthorized = () => {
    if (!isLoggedInTherapist) {
      navigate("/");
      toast({
        title: "Not Authorized",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "purple",
        },
      });
    }
  };

  const getPatientMoods = () => {
    axios
      .get(`http://localhost:3001/moods/patient/${id}`)
      .then((response) => {
        setMoods(response.data.moods);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkAuthorized();
    getPatientMoods();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Flex flexDirection="row" pt="100px">
        <SideMenu />
        <Container maxWidth="7xl" pt={5} ml={300}>
          <Moods moods={moods} therapist={true} />
        </Container>
      </Flex>
    </>
  );
};

export default TherapistLog;

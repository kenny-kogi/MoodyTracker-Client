import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Patient/Navbar";
import { Flex, Container } from "@chakra-ui/react";
import SideMenu from "../../Shared/Patient/SideMenu";
import { AppContext } from "../../../context/appcontext";
import axios from "axios";
import Moods from "../DailyLog/Moods";

const UserLog = () => {
  const [moods, setMoods] = useState({});
  const { patient } = useContext(AppContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/moods/patient/${patient.id}`)
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
export default UserLog;

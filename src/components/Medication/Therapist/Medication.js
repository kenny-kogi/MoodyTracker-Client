import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import DrugImage from "./MedComponents/DrugImage";
import Prescription from "./MedComponents/Prescription";
import UsageInterval from "./MedComponents/UsageInterval";

const Medication = ({ drugname, prescription, usageInterval }) => {
  return (
    <>
      <Flex direction="row" justifyContent="space-evenly" mt={20}>
        <DrugImage drugname={drugname} />
        <Prescription prescription={prescription} />
        <UsageInterval usageInterval={usageInterval} />
      </Flex>
      <Divider mt={10} size="30px" color="purple" />
    </>
  );
};

export default Medication;

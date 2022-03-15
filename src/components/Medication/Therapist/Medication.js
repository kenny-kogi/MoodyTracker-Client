import React from "react";
import { Flex, Tag } from "@chakra-ui/react";

const Medication = ({ drugname, prescription, usageInterval }) => {
  return (
    <>
      <Flex direction="row" width={1000} justifyContent="space-evenly">
        <Tag>{drugname}</Tag>
        <Tag>{prescription}</Tag>
        <Tag>{usageInterval}</Tag>
      </Flex>
    </>
  );
};

export default Medication;

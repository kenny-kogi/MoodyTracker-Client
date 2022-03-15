import React from "react";
import DrugPic from "../../../../assets/d.jpeg";
import { Image, Flex, Tag } from "@chakra-ui/react";

const DrugImage = ({ drugname }) => {
  return (
    <>
      <Flex width={200} height={200} direction="column" gap={5}>
        <Image
          src={DrugPic}
          alt="Drug Image"
          width={200}
          height={200}
          borderRadius="50px"
        />
        <Flex direction="row" justifyContent="center">
          <Tag backgroundColor="pink">{drugname}</Tag>
        </Flex>
      </Flex>
    </>
  );
};

export default DrugImage;

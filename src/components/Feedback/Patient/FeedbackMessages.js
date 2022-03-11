import React from "react";
import { Flex, Badge, Tag } from "@chakra-ui/react";

const Messages = ({ title, body, therapistName, created_at }) => {
  return (
    <>
      <Flex
        margin="auto"
        width={800}
        height={250}
        mb={10}
        border="1px solid purple.100"
        borderRadius={8}
        boxShadow="xl"
        borderWidth={2}
        direction="column"
      >
        <Flex direction="row" justifyContent="center" gap={5} m="10px">
          <Badge backgroundColor="pink.200" size="200px">
            From: {therapistName}
          </Badge>
          <Badge>Time: {created_at}</Badge>
        </Flex>

        <Flex direction="column" m="10px">
          <Tag>Title: {title}</Tag>
        </Flex>
      </Flex>
    </>
  );
};

export default Messages;

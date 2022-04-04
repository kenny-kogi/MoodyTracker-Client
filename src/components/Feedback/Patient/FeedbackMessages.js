import React from "react";
import { Flex, Badge, Tag, Text, Box } from "@chakra-ui/react";

const Messages = ({ title, body, therapistName, created_at }) => {
  return (
    <>
      <Flex
        width={1200}
        height={130}
        mb={10}
        border="1px solid purple.100"
        borderRadius={8}
        boxShadow="xl"
        borderWidth={2}
        direction="column"
      >
        <Flex direction="row" justifyContent="center" gap={5} m="10px">
          <Badge backgroundColor="purple.200" size="200px">
            From: {therapistName}
          </Badge>
          <Badge>Time: {created_at}</Badge>
        </Flex>

        <Flex direction="column" ml={5}>
          <Flex direction="row">
            <Tag bgColor="purple.100" height="30px" width="100px" mr="20px">
              Title:
            </Tag>
            <Text> {title}</Text>
          </Flex>

          <Flex mt="5px" direction="row">
            <Tag bgColor="purple.100" height="30px" width="100px" mr="20px">
              Body:
            </Tag>
            <Box>{body}</Box>
          </Flex>
          {/* <Tag height="{}40px">

            <Text fontSize="15px" fontWeight="bold" mr="20px" as="span">
              Title:{" "}
            </Text>
            {title}
          </Tag>
          <Badge>Body</Badge> */}
        </Flex>
      </Flex>
    </>
  );
};

export default Messages;

import React from "react";
import { Box, Tag, Flex, Divider, IconButton, Button } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";

const ModelNames = ({ modelName, modelTitle, deleteModel }) => {
  let navigate = useNavigate();
  return (
    <Box
      height={400}
      width={350}
      mt={10}
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="lg"
      borderWidth={1}
      bgColor="whiteAlpha.600"
    >
      <Tag bgColor="pink.100" w="100%">
        {modelTitle}
      </Tag>

      <Flex mt={2} direction="column" height={350} overflow="scroll">
        {modelName.map((user) => (
          <>
            <Flex justifyContent="space-between">
              <Flex direction="row" m={3} justifyContent="space-around">
                <Button
                  onClick={() => {
                    navigate(`/reports/details/${modelTitle}/${user.id}`);
                  }}
                >
                  {user.firstName + " " + user.lastName}
                </Button>
              </Flex>

              <IconButton
                variant="outline"
                colorScheme="red"
                aria-label="Call Sage"
                fontSize="20px"
                width="2px"
                height="30px"
                m={3}
                icon={<MdDelete />}
                onClick={() => {
                  deleteModel(modelTitle, user.id);
                }}
              />
            </Flex>
            <Divider bgColor="red" />
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default ModelNames;

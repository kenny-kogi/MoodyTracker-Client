import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const LogOutNavbar = ({ currentlogged }) => {
  let navigate = useNavigate();

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        as="header"
        position="fixed"
        w="100"
        m={0}
        borderBottom="3px solid"
        borderColor="purple.100"
        bgColor="white"
        height="80px"
      >
        <Box>
          <Button
            colorScheme="pink"
            size="lg"
            fontSize="lg"
            variant="ghost"
            fontWeight="bold"
            onClick={() => {
              console.log("handleling logout click");
              navigate(`/logout/${currentlogged}`);
            }}
            ml={1200}
          >
            Log out
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default LogOutNavbar;

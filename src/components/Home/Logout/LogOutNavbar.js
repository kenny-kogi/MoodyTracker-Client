import React from "react";
import { Box, Button, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
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
        w="100%"
        m={0}
        borderBottom="3px solid"
        borderColor="purple.100"
        bgColor="white"
        zIndex="overlay"
      >
        <Link to="/">
          {" "}
          <Box>
            <Image height="90px" src={Logo} alt="brand" />
          </Box>
        </Link>
        <Box>
          <Button
            colorScheme="pink"
            size="lg"
            fontSize="lg"
            variant="ghost"
            fontWeight="bold"
            onClick={() => {
              navigate(`/logout/${currentlogged}`);
            }}
          >
            Log out
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default LogOutNavbar;

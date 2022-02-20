import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { useNavigate } from "react-router";

const LogOutNavbar = ({ currentlogged }) => {
  let navigate = useNavigate();

  return (
    <header>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={6}
        mr={6}
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
              console.log("handleling logout click");
              navigate(`/logout/${currentlogged}`);
            }}
          >
            Log out
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default LogOutNavbar;

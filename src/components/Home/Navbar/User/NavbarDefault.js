import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import Logo from "../../../../assets/logo.png";
import { useNavigate } from "react-router";

const NavbarDefault = () => {
  let navigate = useNavigate();

  return (
    <header>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={6}
        mr={6}
        position="fixed"
      >
        <Box>
          <Image
            height="90px"
            src={Logo}
            alt="brand"
            onClick={() => {
              navigate("/");
            }}
            _hover={{ cursor: "pointer" }}
          />
        </Box>

        <Box>
          <Button
            colorScheme="pink"
            size="lg"
            fontSize="lg"
            variant="ghost"
            fontWeight="bold"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </Button>
          <Button
            p={3}
            colorScheme="purple"
            size="lg"
            fontSize="lg"
            variant="ghost"
            mr={2}
            fontWeight="bold"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default NavbarDefault;

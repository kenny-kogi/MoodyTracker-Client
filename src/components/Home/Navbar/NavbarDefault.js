import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import Logo from "../../../assets/logo.png";
import { useNavigate } from "react-router";

const NavbarDefault = ({ user, patient, therapist }) => {
  let navigate = useNavigate();
  let navstring;

  if (patient) {
    navstring = "patient";
  }
  if (therapist) {
    navstring = "therapist";
  }

  return (
    <header>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={6}
        mr={6}
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
          {user ? (
            <>
              {" "}
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
            </>
          ) : (
            <>
              {" "}
              <Button
                colorScheme="pink"
                size="lg"
                fontSize="lg"
                variant="ghost"
                fontWeight="bold"
                onClick={() => {
                  navigate(`/${navstring}/signup`);
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
                  navigate(`/${navstring}/login`);
                }}
              >
                Log in
              </Button>
            </>
          )}
        </Box>
      </Box>
    </header>
  );
};

export default NavbarDefault;

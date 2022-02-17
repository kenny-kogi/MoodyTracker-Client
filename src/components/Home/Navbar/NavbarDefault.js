import React, { useContext } from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import Logo from "../../../assets/logo.png";
import { AppContext } from "../../../context/appcontext";
import { useNavigate } from "react-router";

const NavbarDefault = ({ loginPage }) => {
  let navigate = useNavigate();
  const { isLoggedIn, isLoggedInPatient } = useContext(AppContext);

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
          <Button
            colorScheme="pink"
            size="lg"
            fontSize="lg"
            variant="ghost"
            fontWeight="bold"
            onClick={() => {
              if (isLoggedIn) {
                navigate("/signup");
              } else if (isLoggedInPatient) {
                navigate("/patient/signup");
              } else {
                navigate("/signup");
              }
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
              if (isLoggedIn) {
                navigate("/login");
              } else if (isLoggedInPatient) {
                navigate("/patient/login");
              } else {
                navigate("/login");
              }
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

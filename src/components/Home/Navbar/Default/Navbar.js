import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Logo from "../../../../assets/logo.png";
import { useNavigate } from "react-router";
import { Link } from "@chakra-ui/react";

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
        zIndex="overlay"
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

        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Link
            color="purple"
            size="lg"
            fontSize="lg"
            variant="link"
            fontWeight="bold"
            _hover={{
              color: "purple.600",
            }}
            mr={5}
            href="#about"
          >
            About
          </Link>

          <Link
            color="purple"
            size="lg"
            fontSize="lg"
            variant="link"
            fontWeight="bold"
            _hover={{
              color: "purple.600",
            }}
            mr={5}
            href="#features"
          >
            Features
          </Link>
          <Link
            color="purple"
            size="lg"
            fontSize="lg"
            variant="link"
            fontWeight="bold"
            _hover={{
              color: "purple.600",
            }}
            mr={5}
            href="#contact"
          >
            Contact
          </Link>
        </Box>
      </Box>
    </header>
  );
};

export default NavbarDefault;

import React from "react";
import LoginNavbar from "./LoginNavbar";
import LogOutNavbar from "./LogOutNavbar";
import NavbarDefault from "./NavbarDefault";
import SignUpNavbar from "./SignUpNavbar";

const Navbar = ({ loggedInStatus, handleClick, login, signup }) => {
  if (loggedInStatus) {
    return <LogOutNavbar handleClick={handleClick} />;
  } else {
    if (login) {
      return <SignUpNavbar />;
    } else if (signup) {
      return <LoginNavbar />;
    } else {
      return <NavbarDefault />;
    }
  }
};
export default Navbar;

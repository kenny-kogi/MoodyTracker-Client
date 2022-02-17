import React, { useContext } from "react";

import LogOutNavbar from "./LogOutNavbar";
import NavbarDefault from "./NavbarDefault";

import { AppContext } from "../../../context/appcontext";

const Navbar = () => {
  const { isLoggedIn, isLoggedInPatient } = useContext(AppContext);

  return isLoggedIn || isLoggedInPatient ? <LogOutNavbar /> : <NavbarDefault />;
};
export default Navbar;

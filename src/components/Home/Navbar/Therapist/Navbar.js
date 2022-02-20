import React, { useContext } from "react";
import LogOutNavbar from "../../Logout/LogOutNavbar";
import NavbarDefault from "./NavbarDefault";
import { AppContext } from "../../../../context/appcontext";

const Navbar = () => {
  const { isLoggedInTherapist } = useContext(AppContext);

  return isLoggedInTherapist ? <LogOutNavbar /> : <NavbarDefault />;
};
export default Navbar;

import React, { useContext } from "react";

import LogOutNavbar from "./LogOutNavbar";
import NavbarDefault from "./NavbarDefault";

import { AppContext } from "../../../context/appcontext";

const Navbar = ({ login, signup }) => {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? <LogOutNavbar /> : <NavbarDefault />;

  // if (isLoggedIn) {
  //   return <LogOutNavbar />;
  // } else {
  //   if (login) {
  //     return <SignUpNavbar />;
  //   } else if (signup) {
  //     return <LoginNavbar />;
  //   } else {
  //     return <NavbarDefault />;
  //   }
  // }
};
export default Navbar;

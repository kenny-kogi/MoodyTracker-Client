import React, { useContext } from "react";
import LogOutNavbar from "../../Logout/LogOutNavbar";
import NavbarDefault from "./NavbarDefault";
import { AppContext } from "../../../../context/appcontext";

const Navbar = () => {
  const { isLoggedInPatient } = useContext(AppContext);

  return isLoggedInPatient ? (
    <LogOutNavbar currentlogged={"patient"} />
  ) : (
    <NavbarDefault />
  );
};
export default Navbar;

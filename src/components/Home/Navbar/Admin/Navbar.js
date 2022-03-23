import React, { useContext } from "react";
import LogOutNavbar from "../../Logout/Admin/LogOutNavbar";
import NavbarDefault from "./NavbarDefault";
import { AppContext } from "../../../../context/appcontext";

const Navbar = () => {
  const { isLoggedInAdmin } = useContext(AppContext);

  return isLoggedInAdmin ? (
    <LogOutNavbar currentlogged={"admin"} />
  ) : (
    <NavbarDefault />
  );
};
export default Navbar;

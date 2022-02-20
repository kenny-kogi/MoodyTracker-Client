import React, { useContext } from "react";
import LogOutNavbar from "../../Logout/LogOutNavbar";
import NavbarDefault from "./NavbarDefault";
import { AppContext } from "../../../../context/appcontext";

const Navbar = () => {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? (
    <LogOutNavbar currentlogged={"user"} />
  ) : (
    <NavbarDefault />
  );
};
export default Navbar;

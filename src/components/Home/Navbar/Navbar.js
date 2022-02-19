import React, { useContext } from "react";
import LogOutNavbar from "./LogOutNavbar";
import NavbarDefault from "./NavbarDefault";
import { AppContext } from "../../../context/appcontext";

const Navbar = ({ user, patient, therapist }) => {
  const { isLoggedIn, isLoggedInPatient, isLoggedInTherapist } =
    useContext(AppContext);

  return isLoggedIn || isLoggedInPatient || isLoggedInTherapist ? (
    <LogOutNavbar />
  ) : (
    <NavbarDefault user={user} patient={patient} therapist={therapist} />
  );
};
export default Navbar;

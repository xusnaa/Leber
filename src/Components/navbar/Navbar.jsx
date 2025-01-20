import React from "react";
import Logo from "../Logo";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <Logo />
      <Navlinks />
    </div>
  );
};

export default Navbar;

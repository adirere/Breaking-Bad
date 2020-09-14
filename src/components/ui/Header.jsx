import React from "react";
import logo from "../../images/logo.png";
import { ReactComponent as Icon } from "../../images/tubeIcon.svg";

const Header = () => {
  return (
    <header className="center">
      <Icon style={{ position: "relative", width: "50px" }} />
      <img src={logo} alt="Breaking Bad logo" />
    </header>
  );
};

export default Header;

import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <img className="logo header__logo" src={logo} alt="Логотип Mesto" />
    </header>
  );
}

export default Header;

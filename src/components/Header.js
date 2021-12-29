import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header({ linkText, path }) {
  return (
    <header className="header page__header">
      <Link to="/">
        <img className="logo header__logo" src={logo} alt="Логотип Mesto" />
      </Link>
      <Link className="header__link" to={path}>
        {linkText}
      </Link>
    </header>
  );
}

export default Header;

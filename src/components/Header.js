import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header({ email, linkText, path }) {
  return (
    <header className="header page__header">
      <Link to="/">
        <img className="logo header__logo" src={logo} alt="Логотип Mesto" />
      </Link>
      <div className="header__profile">
        {email && <p className="header__email">{email}</p>}
        <Link className="header__link" to={path}>
          {linkText}
        </Link>
      </div>
    </header>
  );
}

export default Header;

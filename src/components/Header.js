import React from "react";
import logo from "../images/logo.svg";
import { Link, useHistory } from "react-router-dom";

function Header({ email, linkText, path, loggedIn, setLoggedIn }) {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/sign-in");
  };

  return (
    <header className="header page__header">
      <Link to="/">
        <img className="logo header__logo" src={logo} alt="Логотип Mesto" />
      </Link>
      <div className="header__profile">
        {loggedIn ? (
          <>
            <p className="header__email">{email}</p>
            <button className="header__link" onClick={signOut}>
              {linkText}
            </button>
          </>
        ) : (
          <Link className="header__link" to={path}>
            {linkText}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

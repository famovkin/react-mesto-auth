import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../utils/auth";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .authorize(password, email)
      .then((data) => {
        if (data.token) {
          setEmail("");
          setPassword("");
          handleLogin();
          history.push("/");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="form-section">
      <div className="form-section__container">
        <form
          onSubmit={handleSubmit}
          className="form-section__form"
          name="sign-up"
        >
          <h2 className="form-section__title">Вход</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-section__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-section__input"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <button className="form-section__button" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

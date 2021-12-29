import React from "react";

function Login() {
  return (
    <div className="form-section">
      <div className="form-section__container">
        <form className="form-section__form" name="sign-up">
          <h2 className="form-section__title">Вход</h2>
          <input
            className="form-section__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
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

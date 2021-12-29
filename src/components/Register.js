import React from "react";

function Register() {
  return (
    <div className="form-section">
      <div className="form-section__container">
        <form className="form-section__form" name="sign-up">
          <h2 className="form-section__title">Регистрация</h2>
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
            Зарегистрироваться
          </button>
          <p className="form-section__text">
            Уже зарегистрированы? <a className="form-section__link" href="#">Войти</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

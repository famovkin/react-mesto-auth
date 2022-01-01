import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "./auth";

function Register({ setInfoMsg, setRegistationStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cleanupFlag, setCleanupFlag] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return () => setCleanupFlag(true);
  }, []);

  const handleSubmit = (e) => {
    if (!cleanupFlag) {
      setIsLoading(true);
      e.preventDefault();
      auth
        .register(password, email)
        .then((res) => {
          if (res) {
            history.push("/sign-in");
            setRegistationStatus(true);
          } else {
            console.log("Что-то пошло не так");
            setRegistationStatus(false);
          }
        })
        .catch((e) => console.log(e))
        .finally(() => {
          setInfoMsg(true);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="form-section">
      <div className="form-section__container">
        <form
          onSubmit={handleSubmit}
          className="form-section__form"
          name="sign-up"
        >
          <h2 className="form-section__title">Регистрация</h2>
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
            {isLoading ? "Загрузка..." : "Зарегистрироваться"}
          </button>
          <p className="form-section__text">
            Уже зарегистрированы?{" "}
            <Link className="form-section__link" to="/sign-in">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

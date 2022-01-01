import React from "react";
import closeButton from "../images/close_icon.svg";
import success from "../images/success.png";
import failure from "../images/failure.png";

function InfoToolTip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} onClick={onClose}>
      <div
        className="popup__container popup__container_type_info"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup__close-button" type="button">
          <img
            className="popup__close-image"
            onClick={onClose}
            src={closeButton}
            alt="Крестик"
          />
        </button>
        <img
          className="popup__info-image"
          src={isSuccess ? success : failure}
          alt="Галочка"
        />
        <h2 className="popup__title popup__title_type_info">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз"}
        </h2>
      </div>
    </div>
  );
}

export default InfoToolTip;

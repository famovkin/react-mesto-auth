import React from "react";
import closeButton from "../images/close_icon.svg";

function PopupWithForm(props) {
  function handleSubmit(e) {
    props.onSubmit(e);
  }

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <button className="popup__close-button" type="button">
          <img
            className="popup__close-image"
            onClick={props.onClose}
            src={closeButton}
            alt="Крестик"
          />
        </button>
        <form
          onSubmit={handleSubmit}
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__button" type="submit">
            {props.isLoading ? props.textLoader : props.textSubmitBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

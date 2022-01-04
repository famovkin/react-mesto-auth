import React from "react";
import Popup from "./Popup";

function PopupWithForm({ isOpen, name, onClose, ...props }) {
  function handleSubmit(e) {
    props.onSubmit(e);
  }

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className={`popup__form popup__form_type_${name}`}
        name={name}
      >
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="popup__button" type="submit">
          {props.isLoading ? props.textLoader : props.textSubmitBtn}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;

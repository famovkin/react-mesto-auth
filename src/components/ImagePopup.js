import React from "react";
import closeButton from "../images/close_icon.svg";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${props.isOpen && "popup_opened"}`}
      onClick={props.onClose}
    >
      <div
        className="popup__image-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup__close-button" type="button">
          <img
            className="popup__close-image"
            onClick={props.onClose}
            src={closeButton}
            alt="Крестик"
          />
        </button>
        <img
          className="popup__image"
          src={props.selectedCard.link}
          alt={props.selectedCard.name}
        />
        <h2 className="popup__heading">{props.selectedCard.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;

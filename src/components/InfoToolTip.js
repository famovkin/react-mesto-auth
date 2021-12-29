import React from "react";
import closeButton from "../images/close_icon.svg";

function InfoToolTip({ image, title }) {
  return (
    <div className="popup">
      <div className="popup__container popup__container_type_info">
        <button className="popup__close-button" type="button">
          <img className="popup__close-image" src={closeButton} alt="Крестик" />
        </button>
        <img className="popup__info-image" src={image} alt="Галочка" />
        <h2 className="popup__title popup__title_type_info">{title}</h2>
      </div>
    </div>
  );
}

export default InfoToolTip;
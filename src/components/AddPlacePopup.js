import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [placeTitle, setPlaceTitle] = useState("");
  const [placeLinkImage, setPlaceLinkImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name: placeTitle, link: placeLinkImage }, clearInputs);
  }

  function clearInputs() {
    setPlaceTitle("");
    setPlaceLinkImage("");
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="add"
      title="Новое место"
      textSubmitBtn="Создать"
      textLoader="Сохранение..."
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        value={placeTitle}
        onChange={(e) => {
          setPlaceTitle(e.target.value);
        }}
        id="place-name-input"
        className="popup__input popup__input_type_place-name"
        type="text"
        name="place-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error place-name-input-error"></span>
      <input
        value={placeLinkImage}
        onChange={(e) => {
          setPlaceLinkImage(e.target.value);
        }}
        id="place-link-input"
        className="popup__input popup__input_type_place-link"
        type="url"
        name="place-link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error place-link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

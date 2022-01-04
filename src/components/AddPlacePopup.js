import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

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
      <Input
        value={placeTitle}
        onChange={(e) => setPlaceTitle(e.target.value)}
        type="text"
        name="place-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
      />
      <span className="popup__error place-name-input-error"></span>
      <Input
        value={placeLinkImage}
        onChange={(e) => setPlaceLinkImage(e.target.value)}
        type="url"
        name="place-link"
        placeholder="Ссылка на картинку"
      />
      <span className="popup__error place-link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

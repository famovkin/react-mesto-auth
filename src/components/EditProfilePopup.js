import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: name, job: description });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      textSubmitBtn="Сохранить"
      textLoader="Сохранение..."
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name || ""}
        onChange={handleChangeName}
        id="name-input"
        className="popup__input popup__input_type_name"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error name-input-error"></span>
      <input
        value={description || ""}
        onChange={handleChangeDescription}
        id="job-input"
        className="popup__input popup__input_type_job"
        type="text"
        name="job"
        placeholder="Профессиональная деятельность"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

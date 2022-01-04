import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Input from "./Input";

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
      <Input
        value={name || ""}
        onChange={handleChangeName}
        name="name"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
      />
      <span className="popup__error name-input-error"></span>
      <Input
        value={description || ""}
        onChange={handleChangeDescription}
        name="job"
        type="text"
        placeholder="Профессиональная деятельность"
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const inputForImage = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputForImage.current);
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="update-avatar"
      title="Обновить аватар"
      textSubmitBtn="Сохранить"
      textLoader="Сохранение..."
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Input
        ref={inputForImage}
        name="avatar-link"
        type="url"
        placeholder="Ссылка на аватар"
      />
      <span className="popup__error avatar-link-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

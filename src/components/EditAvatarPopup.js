import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

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
      <input
        ref={inputForImage}
        id="avatar-link-input"
        className="popup__input popup__input_type_avatar-link"
        type="url"
        name="avatar-link"
        placeholder="Ссылка на аватар"
        required
      />
      <span className="popup__error avatar-link-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import useFormAndValidation from "../hooks/useFormAndValidation";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const { handleChange, values, errors, isFormValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(values["avatar-link"]);
  }

  useEffect(() => resetForm(), [isOpen, resetForm]);

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
      isFormValid={isFormValid}
    >
      <Input
        value={values["avatar-link"] || ""}
        onChange={handleChange}
        name="avatar-link"
        type="url"
        placeholder="Ссылка на аватар"
        isValid={errors["avatar-link"] ? true : false}
      />
      <span
        className={`popup__error avatar-link-input-error ${
          errors["avatar-link"] ? "popup__error_visible" : ""
        }`}
      >
        {errors["avatar-link"]}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

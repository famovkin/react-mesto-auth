import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import useFormAndValidation from "../hooks/useFormAndValidation";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const { handleChange, values, errors, isFormValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name: values["place-name"], link: values["place-link"] });
  }

  useEffect(() => resetForm(), [isOpen, resetForm]);

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
      isFormValid={isFormValid}
    >
      <Input
        value={values["place-name"] || ""}
        isValid={errors["place-name"] ? true : false}
        onChange={handleChange}
        type="text"
        name="place-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
      />
      <span
        className={`popup__error place-name-input-error ${
          errors["place-name"] ? "popup__error_visible" : ""
        }`}
      >
        {errors["place-name"]}
      </span>
      <Input
        value={values["place-link"] || ""}
        isValid={errors["place-link"] ? true : false}
        onChange={handleChange}
        type="url"
        name="place-link"
        placeholder="Ссылка на картинку"
      />
      <span
        className={`popup__error place-link-input-error ${
          errors["place-link"] ? "popup__error_visible" : ""
        }`}
      >
        {errors["place-link"]}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

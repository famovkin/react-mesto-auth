import React, { useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Input from "./Input";
import useFormAndValidation from "../hooks/useFormAndValidation";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { handleChange, values, setValues, errors, isFormValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, job: currentUser.about });
  }, [currentUser, isOpen, setValues, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: values["name"], job: values["job"] });
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
      isFormValid={isFormValid}
    >
      <Input
        value={values["name"] || ""}
        onChange={handleChange}
        isValid={errors["name"] ? true : false}
        name="name"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
      />
      <span
        className={`popup__error name-input-error ${
          errors["name"] ? "popup__error_visible" : ""
        }`}
      >
        {errors["name"]}
      </span>
      <Input
        value={values["job"] || ""}
        onChange={handleChange}
        isValid={errors["job"] ? true : false}
        name="job"
        type="text"
        placeholder="Профессиональная деятельность"
        minLength="2"
        maxLength="200"
      />
      <span
        className={`popup__error job-input-error ${
          errors["job"] ? "popup__error_visible" : ""
        }`}
      >
        {errors["job"]}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

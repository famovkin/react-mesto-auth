import { useState } from "react";

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    setIsFormValid(event.target.closest(".popup__form").checkValidity());
    let name = event.target.name;
    let val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });

    if (!event.target.validity.valid) {
      setErrors({ ...errors, [name]: event.target.validationMessage });
    } else {
      const currentState = errors;
      delete currentState[name];
      setErrors({
        ...errors,
        ...currentState,
      });
    }
  };

  return {
    handleChange,
    setValues,
    setErrors,
    values,
    errors,
    isFormValid,
  };
}

export default useForm;

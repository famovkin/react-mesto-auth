import React from "react";

function Input({ name, isValid, ...props }) {
  return (
    <input
      className={`popup__input popup__input_type_${name} ${
        !isValid ? "" : "popup__input_type_error"
      }`}
      name={name}
      id={`${name}-input`}
      {...props}
      required
    />
  );
}

export default Input;

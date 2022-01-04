import React from "react";

function Input({ name, ...props }) {
  return (
    <input
      className={`popup__input popup__input_type_${name}`}
      name={name}
      id={`${name}-input`}
      {...props}
      required
    />
  );
}

export default Input;

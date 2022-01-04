import React from "react";

function Form({ handleSubmit, ...props }) {
  return (
    <form
      onSubmit={handleSubmit}
      className={`popup__form popup__form_type_${props.name}`}
      name={props.name}
    >
      <h2 className="popup__title">{props.title}</h2>
      {props.children}
      <button className="popup__button" type="submit">
        {props.isLoading ? props.textLoader : props.textSubmitBtn}
      </button>
    </form>
  );
}

export default Form;
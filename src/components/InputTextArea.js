import React from "react";

function InputTextArea({ name, children, fieldRef }) {
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {children}
      </label>
      <textarea
        id={name}
        name={name}
        ref={fieldRef}
        rows="4"
        cols="50"
      ></textarea>
    </>
  );
}

export default InputTextArea;

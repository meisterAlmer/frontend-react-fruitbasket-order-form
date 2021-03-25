import React from "react";

function InputCheckBox({ name, req, children, fieldRef }) {
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {children}
      </label>

      <input
        type="checkbox"
        id={name}
        name={name}
        value={name}
        ref={fieldRef({
          required: {
            value: { req },
            message: "* Required",
          },
        })}
      />
    </>
  );
}

export default InputCheckBox;

import React from "react";

function InputRadio({ name, req, children, fieldRef, value }) {
  return (
    <>
      <label className="radio-label" htmlFor={value}>
        <input
          id={value}
          value={value}
          name={name}
          type="radio"
          ref={fieldRef({
            required: {
              value: { req },
              message: "* Required",
            },
          })}
        />
        <span>{children}</span>
      </label>
    </>
  );
}

export default InputRadio;

import React from "react";

function InputText({ name, req, children, fieldRef, zip }) {
  const zipCode = function () {
    if (zip) return /^[1-9][0-9]{3}[s]?[A-Za-z]{2}$/i;
    return;
  };
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {children}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        ref={fieldRef({
          required: {
            value: { req },
            message: "* Required",
          },
          pattern: {
            value: zipCode(),
            message: "Geen geldige postcode",
          },
        })}
      />
    </>
  );
}

export default InputText;

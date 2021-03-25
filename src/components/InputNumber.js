import React from "react";

function InputNumber({ name, req, children, fieldRef, val }) {
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {children}
      </label>
      <input
        id={name}
        name={name}
        type="number"
        ref={fieldRef({
          required: {
            value: { req },
            message: "* Required",
          },
          min: {
            value: `${val}`,
            message: `* Minimaal ${val} jaar!`,
          },
        })}
      />
    </>
  );
}

export default InputNumber;

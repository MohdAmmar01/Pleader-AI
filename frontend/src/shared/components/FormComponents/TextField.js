import React from "react";

export default function TextField({
  type,
  placeholder,
  value,
  isRequired,
  className,
  isReadOnly,
  name,
  id,
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        readOnly={isReadOnly}
        name={name}
        className={className}
      />
    </>
  );
}

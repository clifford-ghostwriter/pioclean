import React from "react";

const Formrow = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleFormChange,
  className,
  required,
}) => {
  return (
    <div>
      {label ? <label htmlFor={name}>{name}</label> : null}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleFormChange}
        className={className}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Formrow;

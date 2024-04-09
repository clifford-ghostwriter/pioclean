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
    <div className="form-row">
      {label ? (
        <label htmlFor={name} className="form-label">
          {name}
        </label>
      ) : null}
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

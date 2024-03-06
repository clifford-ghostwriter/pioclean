import React from "react";

const Formrowselect = ({ label, name }) => {
  return (
    <div>
      {label ? <label htmlFor={name}>{name}</label> : null}
      <select name={name} id={name}>
        <option value="okeja">Ikeja</option>
        <option value="ogba">Ogba</option>
        <option value="oshodi">Oshodi</option>
        <option value="victoria island">victoria island</option>
      </select>
    </div>
  );
};

export default Formrowselect;

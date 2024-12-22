import React from "react";
import style from "./input.module.sass"; 

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  iconClass: string;
}

const InputField: React.FC<InputProps> = ({ label, placeholder, type, iconClass }) => {
  return (
    <label htmlFor={label}>
      {label}
      <div className={style.input_body}>
        <i className={iconClass}></i>
        <input type={type} placeholder={placeholder} id={label}/>
      </div>
    </label>
  );
};

export default InputField;

import React, { useState, ChangeEvent } from "react";
import "../styles/text-input.css";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelStyle: string;
  inputStyle?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  labelStyle,
  inputStyle,
  ...props
}) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="input-container">
      <input
        type="text"
        className={`input-field input-neutral ${inputStyle}`}
        onChange={handleChange}
        value={value}
        placeholder=" "
        {...props}
      />
      <label className={`input-label ${labelStyle}`}>{label}</label>
    </div>
  );
};

export default TextInput;

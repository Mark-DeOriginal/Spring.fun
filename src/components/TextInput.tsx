import React, { useState, ChangeEvent } from "react";
import "../styles/text-input.css";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelStyle?: string;
  inputStyle?: string;
  type?: "text" | "password";
  info?: {
    isError: boolean;
    message: string;
  };
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  labelStyle,
  inputStyle,
  type,
  info,
  ...props
}) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input
          type={type || "text"}
          className={`input-field input-neutral ${inputStyle} ${
            info?.isError ? "error" : ""
          }`}
          onChange={handleChange}
          value={value}
          placeholder=" "
          {...props}
        />
        <label className={`input-label ${labelStyle || ""}`}>{label}</label>
      </div>
      {info && info.message && (
        <p className={`info text-left ${info.isError ? "error" : ""}`}>
          {info.message}
        </p>
      )}
    </div>
  );
};

export default TextInput;

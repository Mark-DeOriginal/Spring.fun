import React from "react";
import DotsLoader from "./DotsLoader";
import "../styles/dots-loader.css";

interface ButtonProps {
  isLoading?: boolean;
  buttonText: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  buttonText,
  className = "btn-primary",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      className={`font-bold px-6 h-[54px] flex items-center justify-center btn-active-scale-sm ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <DotsLoader /> : buttonText}
    </button>
  );
};

export default Button;

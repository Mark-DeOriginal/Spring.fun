import React from "react";
import DotsLoader from "./DotsLoader";
import "../styles/dots-loader.css";

interface ButtonProps {
  isLoading?: boolean;
  buttonText?: string;
  children?: string | React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  buttonText,
  children,
  className = "btn-primary",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      className={`font-bold px-6 h-[50px] flex items-center gap-3 justify-center btn-active-scale-sm ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <DotsLoader /> : children ? children : buttonText}
    </button>
  );
};

export default Button;

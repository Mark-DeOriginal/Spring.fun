import React from "react";

interface CloseBtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const CloseButton: React.FC<CloseBtnProps> = ({ onClick, className }) => {
  return (
    <button
      className={`modal-close-btn btn-secondary btn-active-scale-md ${className}`}
      onClick={onClick}
      aria-label="Close Button"
    >
      &times;
    </button>
  );
};

export default CloseButton;

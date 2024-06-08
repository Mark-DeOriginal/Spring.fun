import React from "react";

interface VBlockProps {
  quantity?: number;
}

const VBlock: React.FC<VBlockProps> = ({ quantity = 1 }) => {
  return (
    <>
      {Array.from({ length: quantity }, (_, i) => (
        <div key={i} className="v-block-spacing h-[20px] w-full"></div>
      ))}
    </>
  );
};

export default VBlock;

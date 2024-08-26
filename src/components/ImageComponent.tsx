import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageComponentProps {
  src: string;
  className?: string;
  alt?: string;
  placeholderColor?: string;
  shouldTransit?: boolean;
}

const Image: React.FC<ImageComponentProps> = ({
  src,
  className,
  alt,
  placeholderColor = "transparent",
  shouldTransit = true,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`img-placeholder ${className}`}
        style={{
          backgroundColor: placeholderColor,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <motion.img
        className={className}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: shouldTransit ? 0.5 : 0.2 }}
        style={{
          display: loaded ? "block" : "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Image;

import React from "react";
import { motion } from "framer-motion";

type HamburgerIconProps = {
  className?: string;
  isProfileRoute: boolean;
};

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  className,
  isProfileRoute,
}) => {
  const topLineVariants = {
    initial: { rotate: 0, y: 0, x: 0, width: "73.053" },
    profile: { rotate: -40, y: 3, x: -5, width: "45" },
  };

  const middleLineVariants = {
    initial: { opacity: 1, width: "58.357" },
    profile: { opacity: 1, width: "73.053" },
  };

  const bottomLineVariants = {
    initial: { rotate: 0, y: 0, x: 0, width: "46.658" },
    profile: { rotate: 40, y: -12, x: -2, width: "45" },
  };

  const containerVariants = {
    initial: { rotate: 0 },
    profile: { rotate: 360 },
  };

  return (
    <motion.svg
      viewBox="130.881 66.34 73.053 61.251"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      variants={containerVariants}
      initial="initial"
      animate={isProfileRoute ? "profile" : "initial"}
      transition={{ duration: 0.3 }}
    >
      <motion.g>
        <motion.rect
          x="130.881"
          y="66.34"
          height="9.724"
          rx="4.9"
          ry="4.9"
          variants={topLineVariants}
          transition={{ duration: 0.2 }}
        />
        <motion.rect
          x="130.881"
          y="92.103"
          height="9.724"
          rx="4.9"
          ry="4.9"
          variants={middleLineVariants}
          transition={{ duration: 0.2 }}
        />
        <motion.rect
          x="130.881"
          y="117.867"
          height="9.724"
          rx="4.9"
          ry="4.9"
          variants={bottomLineVariants}
          transition={{ duration: 0.2 }}
        />
      </motion.g>
    </motion.svg>
  );
};

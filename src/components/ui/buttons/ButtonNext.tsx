import React from "react";
import { rowdies } from "../fonts";
import UserIcon from "@/components/icons/UserIcon";
import NextArrow from "@/components/icons/NextArrow";

const ButtonNext: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
  return (
    <button
      className={`${rowdies.className} flex items-center justify-center text-sm gap-4 text-primary bg-white rounded-full px-4 py-3`}
    >
      {children} <NextArrow />
    </button>
  );
};

export default ButtonNext;
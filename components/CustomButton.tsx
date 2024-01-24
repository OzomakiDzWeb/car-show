"use client";
import Image from "next/image";
import { CustomButtonProps } from "@types";

const CustomButton = ({
  title,
  containerStyles,
  handelClik,
  btntype,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btntype||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handelClik}
    >
      <span className="font-extrabold">{title}</span>
    </button>
  );
};

export default CustomButton;

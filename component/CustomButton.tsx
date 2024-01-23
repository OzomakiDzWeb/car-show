"use client";
import { CustomButtonProps } from "@types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handelClik,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handelClik}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;

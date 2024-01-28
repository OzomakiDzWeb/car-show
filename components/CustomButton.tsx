"use client";
import Image from "next/image";
import { CustomButtonProps } from "@types";

const CustomButton = ({
  title,
  containerStyles,
  handelClik,
  btntype,
  textStyle,
  isDisaple,
  rightIcon
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btntype || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handelClik}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (<div className="relative w-6 h-6">
        <Image src={rightIcon} alt="rghit icon" fill className="object-contain"/>
       </div>)}
    </button>
  );
};

export default CustomButton;

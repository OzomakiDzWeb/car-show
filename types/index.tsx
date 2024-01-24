import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handelClik?: MouseEventHandler<HTMLButtonElement>;
  btntype?:'button'|'submit';
}

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handelClik?: MouseEventHandler<HTMLButtonElement>;
  btntype?:'button'|'submit';
}
export interface CustmFilterProps {
  title?:string
}


export interface SearchManufactrProps {
  manufactre: string;
  setManufactre: (manufactre:string)=>void;
}
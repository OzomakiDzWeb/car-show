import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyle?: string;
  rightIcon?:string;
  handelClik?: MouseEventHandler<HTMLButtonElement>;
  btntype?: "button" | "submit";
  isDisaple?:boolean
}
export interface CustmFilterProps {
  title?:string
}


export interface SearchManufactrProps {
  manufactre: string;
  setManufactre: (manufactre:string)=>void;
}
export interface CarsProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
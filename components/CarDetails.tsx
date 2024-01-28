import React from 'react'
import {CarsProps} from '../types/index'
interface CarDetailsProps {
  isopen: boolean;
  closModel: () => void;
  car: CarsProps;
}
const CarDetails = ({ isopen, closModel, car }: CarDetailsProps ) => {
  return <div>CarDetails</div>;
};

export default CarDetails
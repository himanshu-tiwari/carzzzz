import React from 'react';
import CarCard from "../Components/Dashboard/Listing/CarCard";

export const optionsList = (array) => array.map(
    (option, i) => <option value={option} key={i}>{option}</option>
);

export const listCars = (cars, day, selectedCars) => cars.map((car, i) => (
    <CarCard
        {...{
            ...car,
            available: car.Availability.indexOf(day) > -1
        }}
        key={i}
        selected={selectedCars.indexOf(car.Name) > -1}
    />
));
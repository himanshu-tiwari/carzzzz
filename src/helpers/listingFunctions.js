import React from 'react';
import CarCard from "../Components/Dashboard/Listing/CarCard";

export const filterCars = (cars, location, transmissionType, carType, fuel) => cars
    .filter(car => {
        let filterValue = car.Location === location;

        if (transmissionType.trim().length) {
            filterValue = filterValue && car.Transmission === transmissionType;
        }
        if (carType.trim().length) {
            filterValue = filterValue && car.Car_Type === carType;
        }
        if (fuel.trim().length) {
            filterValue = filterValue && car.Fuel_Type === fuel;
        }

        return filterValue;
    });

export const limitCars = (cars, limit) => cars;

export const sortCars = (cars, order) => {
    if (order === 1 || order === '1') {
        return cars.sort((a, b) => a.Price - b.Price);
    } else {
        return cars.sort((a, b) => a.Price - b.Price).reverse();
    }
}

export const listCars = (cars, day) => cars.map((car, i) => <CarCard
        {...{
            ...car,
            available: car.Availability.indexOf(day) > -1
        }}
        key={i}
    />);
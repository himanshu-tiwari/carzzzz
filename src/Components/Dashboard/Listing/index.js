import React, { Component } from 'react';
import './index.scss';
import moment from 'moment';
import { ReactComponent as Down } from '../../../assets/images/icons/arrow-pointing-down.svg';
import { filterCars, limitCars, sortCars, listCars } from '../../../helpers/listingFunctions';
import SortNfilter from './SortNFilter';

const Listing = (props) => {
    const { limit, cars, filters, viewMore, order, setFilter, setSortOrder } = props;
    const { location, startDate, transmissionType, carType, fuel } = filters;
    
    if (!location.length || !startDate.length) props.history.push('/');

    const filteredCars = filterCars(cars, location, transmissionType, carType, fuel);
    return(
        <div className="car-list-container">
            <SortNfilter {...{ setFilter, transmissionType, carType, fuel, order, setSortOrder, cars }} />

            <div className="car-list">
                {
                    listCars(
                        sortCars(limitCars(filteredCars, limit), order),
                        moment(startDate).format('ddd')
                    )
                }
            </div>
            
            {
                limit < filteredCars.length
                ? <p className="view-more" onClick={viewMore}>
                    View More
                    <Down />
                </p>
                : ''
            }
        </div>
    );
}

export default Listing;
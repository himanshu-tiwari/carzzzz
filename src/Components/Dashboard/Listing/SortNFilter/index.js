import React from 'react';
import './index.scss';
import { optionsList } from '../../../../helpers/partialViews';

const SortNfilter = (props) => {
    const { setFilter, transmissionType, carType, fuel, order, setSortOrder, cars } = props;
    return(
        <div className="sort-n-filter">
            <p className="sort">
                Sort by price:
                <select
                    value={order}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="1">Ascending</option>
                    <option value="-1">Descending</option>
                </select>
            </p>
            
            <div className="filter-group">
                Filter: 
                <select
                    value={transmissionType}
                    onChange={(e) => setFilter({ transmissionType: e.target.value })}
                >
                    <option value="">---</option>
                    {
                        optionsList(
                            cars.map(car => car.Transmission)
                            .filter((type, i, types) => types.indexOf(type) === i)
                        )
                    }
                </select>
                <select
                    value={carType}
                    onChange={(e) => setFilter({ carType: e.target.value })}
                >
                    <option value="">---</option>
                    {
                        optionsList(
                            cars.map(car => car.Car_Type)
                            .filter((type, i, types) => types.indexOf(type) === i)
                        )
                    }
                </select>
                <select
                    value={fuel}
                    onChange={(e) => setFilter({ fuel: e.target.value })}
                >
                    <option value="">---</option>
                    {
                        optionsList(
                            cars.map(car => car.Fuel_Type)
                            .filter((type, i, types) => types.indexOf(type) === i)
                        )
                    }
                </select>

                <button onClick={() => setFilter({ transmissionType: '', carType: '', fuel: '' })}>Clear</button>
            </div>
        </div>
    );
};

export default SortNfilter;
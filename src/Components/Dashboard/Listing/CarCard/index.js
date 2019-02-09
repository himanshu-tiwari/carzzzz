import React from 'react';
import './index.scss';
import { ReactComponent as Fuel } from '../../../../assets/images/icons/fuel-station.svg';
import { ReactComponent as GPS } from '../../../../assets/images/icons/placeholder.svg';
import { ReactComponent as Steering } from '../../../../assets/images/icons/steering-wheel.svg';
import { ReactComponent as Rupee } from '../../../../assets/images/icons/rupee.svg';
import { ReactComponent as Seat } from '../../../../assets/images/icons/baby-car-seat.svg';
import { toggleSelect } from '../../../../store/actions/carsActions';
import { connect } from 'react-redux';

const CarCard = (props) => {
    const {
        Name,
        Photo,
        Location,
        Seats,
        Fuel_Type,
        Transmission,
        available,
        Price,
        selected,
        toggleSelect
    } = props;

    return(
        <div className="car-card-container">
            <div
                className={`car-card ${ available ? selected ? 'selected' : 'unselected' : 'unavailable'}`}
                onClick={() => {
                    if (available) {
                        return toggleSelect(Name);
                    }
                }}
            >
                <div className="specs specs-1">
                    <p>
                        <GPS />
                        { Location }
                    </p>
                    <p className="border"></p>
                    <p>
                        <Steering />
                        { Transmission }
                    </p>
                </div>

                <h3 className="name">{ Name }</h3>
                <img src={Photo} alt={Name} />


                <div className="specs specs-2">
                    <p>
                        <Rupee />
                        { Price }
                    </p>
                    <p className="border"></p>
                    <p>
                        <Seat />
                        { Seats }
                    </p>
                    <p className="border"></p>
                    <p>
                        <Fuel />
                        { Fuel_Type }
                    </p>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSelect: (name) => dispatch(toggleSelect(name))
    };
};

export default connect(null, mapDispatchToProps)(CarCard);
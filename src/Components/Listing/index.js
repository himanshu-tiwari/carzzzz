import React, { Component } from 'react';
import './index.scss';
import CarCard from './CarCard';

class Listing extends Component {
    render() {
        return(
            <div>
                Listing
                <CarCard />
            </div>
        );
    }
}

export default Listing;
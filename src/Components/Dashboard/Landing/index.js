import React, { Component } from 'react';
import './index.scss';
import { optionsList } from '../../../helpers/partialViews';
import moment from 'moment';

class Landing extends Component {
    state = {
        location: this.props.allLocations[0],
        startDate: moment().format('YYYY-MM-DD')
    };

    handleChange = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    handleSubmit = (e) => {
        const { setFilter, history } = this.props;

        e.preventDefault();
        setFilter(this.state);
        history.push('cars');
    };

    render() {
        const { location, startDate } = this.state;

        return(
            <div className="landing">
                <form onSubmit={this.handleSubmit}>
                    <h3 className="heading">Begin your search!</h3>

                    <p className="label">Select Location</p>
                    <select
                        name="location"
                        value={location}
                        onChange={(e) => this.handleChange('location', e.target.value)}
                    >
                        { optionsList(this.props.allLocations) }
                    </select>

                    <p className="label">Choose Start Date</p>
                    <input
                        name="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => this.handleChange('startDate', e.target.value)}
                        min={moment().utc().format('YYYY-MM-DD')}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Landing;
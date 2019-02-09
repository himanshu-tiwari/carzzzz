import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Components/Dashboard/Landing';
import Listing from './Components/Dashboard/Listing';
import { connect } from 'react-redux';
import { setFilter, changeLimit, setSortOrder } from './store/actions/carsActions';
import Dashboard from './Components/Dashboard';

class App extends Component {
	render() {
		const { cars, filters, limit, setFilter, changeLimit, order, setSortOrder, selectedCars } = this.props;
		
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path='/' render={(props) => <Dashboard>
								<Landing {
									...{
										...props,
										allLocations: cars.map(car => car.Location)
											.filter((location, i, arr) => arr.indexOf(location) === i),
										setFilter
									}
								} />
							</Dashboard>
						} />
						
						<Route path='/cars' render={(props) => <Dashboard>
								<Listing {
									...{
										...props,
										cars,
										filters,
										limit,
										viewMore: () => changeLimit(Number(limit) + 3),
										order,
										setFilter,
										setSortOrder,
										selectedCars
									}
								} />
							</Dashboard>
						} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { cars, filters, limit, order, selectedCars } = state.cars;

	return {
		cars,
		filters,
		limit,
		order,
		selectedCars
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
		setFilter: (data) => dispatch(setFilter(data)),
		changeLimit: (newLimit) => dispatch(changeLimit(newLimit)),
		setSortOrder: (data) => dispatch(setSortOrder(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Listing from './Components/Listing';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const { cars } = this.props;

		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path='/'>
							<Landing
								allLocations={
									cars.map(car => car.Location)
										.filter((location, i, arr) => arr.indexOf(location) === i)
								}
							/>
						</Route>
						
						<Route path='/cars' component={Listing} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cars: state.cars.cars
	}
};
export default connect(mapStateToProps)(App);

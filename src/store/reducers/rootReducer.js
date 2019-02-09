import { combineReducers } from 'redux';
import carReducer from './carsReducer';

const rootReducer = combineReducers({
    cars: carReducer
});

export default rootReducer;
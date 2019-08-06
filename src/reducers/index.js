import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
    weather: WeatherReducer,
    loading: LoadingReducer
});

import {
    GET_WEATHER_DATA_SUCCESS,
    GET_WEATHER_DATA_FAIL
} from '../constants/types';

const INITIAL_STATE = {
    selectedDay: {},
    weatherData: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_WEATHER_DATA_SUCCESS:
            return { ...state, selectedDay: action.payload[0], weatherData: action.payload.slice(1) };
        case GET_WEATHER_DATA_FAIL:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

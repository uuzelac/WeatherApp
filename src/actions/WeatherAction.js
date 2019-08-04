import http from '../utils/http';
import { removeUserPermissionUrl } from '../utils/urls';
import {
    GET_WEATHER_DATA_SUCCESS,
    GET_WEATHER_DATA_FAIL
} from '../constants/types';

export const getWeatherData = (startDate, enddate) => async dispatchEvent => {
    try {
        const keys = await http.get(removeUserPermissionUrl(startDate, enddate));
        getWeatherDataSuccess(dispatchEvent, keys.data);
    } catch (error) {
        getWeatherDataFail(dispatchEvent, error);
    }
};

const getWeatherDataSuccess = (dispatchEvent, payload) =>
    dispatchEvent({
        type: GET_WEATHER_DATA_SUCCESS,
        payload,
    });

const getWeatherDataFail = (dispatchEvent, payload) =>
    dispatchEvent({
        type: GET_WEATHER_DATA_FAIL,
        payload,
    });

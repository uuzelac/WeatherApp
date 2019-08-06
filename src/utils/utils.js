import moment from 'moment';
import {
    PARTLY_SUNNY,
    RAIN,
    SUNNY,
    MOSTLY_CLOUDY,
    CLEAR_SKY,
    CLOUDY
} from '../constants/types';
import images from '../assets/images';

export const getWeatherDescription = (flag) => {
    switch (flag) {
        case PARTLY_SUNNY:
            return 'Partly sunny and hot';
        case RAIN:
            return 'Rain';
        case SUNNY:
            return 'Sunny';
        case MOSTLY_CLOUDY:
            return 'Mostly cloudy';
        case CLEAR_SKY:
            return 'Clear sky';
        case CLOUDY:
            return 'Cloudy';
        default:
            break;
    }
};

export const getWeatherImage = (flag, size) => {
    return images[`${flag}_${size}`];
};

export const returnCurrentHour = (date, hour12) => {
    return moment(date).format(hour12 ? 'h' : 'k');
};

export const returnAmPm = (date) => {
    return moment(date).format('A');
};

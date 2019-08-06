import { LOADING_START, LOADING_STOP } from '../constants/types';

const INITIAL_STATE = {
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_START:
            return { loading: true };
        case LOADING_STOP:
            return { loading: false };
        default:
            return state;
    }
};

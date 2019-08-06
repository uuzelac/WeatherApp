import { LOADING_START, LOADING_STOP } from '../constants/types';

export const loadingStart = () => ({ type: LOADING_START });

export const loadingStop = () => ({ type: LOADING_STOP });

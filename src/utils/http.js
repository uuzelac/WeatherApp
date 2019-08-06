import axios from 'axios';
import store from '../store';
import { loadingStart, loadingStop } from '../actions/LoadingAction';

const http = axios.create();

http.interceptors.request.use(request => {
    // console.log('REQ: ', request);
    store.dispatch(loadingStart());
    return request;
});

http.interceptors.response.use(response => {
    // console.log('RES: ', response);
    store.dispatch(loadingStop());
    return response;
}, error => {
    // console.log('ERR:', error);
    store.dispatch(loadingStop());
    throw error;
}
);

export default http;

import axios from 'axios';

const http = axios.create();

http.interceptors.request.use(request => {
    console.log('REQ: ', request);
    return request;
});

http.interceptors.response.use(response => {
        console.log('RES: ', response);
        return response;
    }, error => {
        console.log('ERR:', error);
        throw error;
    }
);

export default http;

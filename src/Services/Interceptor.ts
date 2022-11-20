import axios from 'axios';
import store from '../Redux/Store';
import notify from "./Notifications";

const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(request => {
    request.headers = {
        "authorization": store.getState().userReducer.user?.token
    };
    return request;
});

tokenAxios.interceptors.response.use(
    response => response,
    error => {
        notify.error(error);
        return error;
    }
);

export default tokenAxios;
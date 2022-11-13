import axios from "axios";
import {Task} from "../Models/Task";
import globals from "./Global";
import {CredentialsRequest, LoginResponse} from "../Models/Auth";
import store from "../Redux/Store";

export function login(credentials: CredentialsRequest) {
    return axios.post<LoginResponse>(globals.urls.auth + "login", credentials);
}

export function registerToService(credentials: CredentialsRequest) {
    return axios.post<void>(globals.urls.auth + "register", credentials);
}

export function getAllTasks() {
    const options = {headers: {Authorization: store.getState().userReducer.user?.token}};
    return axios.get<Task[]>(globals.urls.users, options);
}

export function getSingletTask(id: number) {
    const options = {headers: {Authorization: store.getState().userReducer.user?.token}};
    return axios.get<Task>(globals.urls.users + id, options);
}

export function deleteTask(id: number) {
    const options = {headers: {Authorization: store.getState().userReducer.user?.token}};
    return axios.delete<Task>(globals.urls.users + id, options);
}

export function updateTask(id: number, task: Task) {
    const options = {headers: {Authorization: store.getState().userReducer.user?.token}};
    return axios.put<Task>(globals.urls.users + id, task, options);
}

export function addTask(task: Task) {
    const options = {headers: {Authorization: store.getState().userReducer.user?.token}};
    return axios.post<Task>(globals.urls.users, task, options);
}


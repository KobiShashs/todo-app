import axios from "axios";
import {Task} from "../Models/Task";
import globals from "./Global";

export function getAllTasks() {
    return axios.get<Task[]>(globals.urls.todos);
}

export function getSingletTask(id: number) {
    return axios.get<Task>(globals.urls.todos + id);
}

export function deleteTask(id: number) {
    return axios.delete<Task>(globals.urls.todos + id);
}

export function updateTask(id: number,task:Task) {
    return axios.put<Task>(globals.urls.todos + id,task);
}

export function addTask(task:Task) {
    return axios.post<Task>(globals.urls.todos,task);
}


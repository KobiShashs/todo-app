import {Task} from "../Models/Task";

// Step 1 - Manage a global collection
export class TaskAppState {
    public tasks: Task[] = [];
}

// Step 2 - Manage all possible actions
export enum TaskActionType {
    DOWNLOADED_ALL = "DOWNLOADED_ALL",
    DOWNLOADED_ONE = "DOWNLOADED_ONE",
    DELETED_TASK = "DELETED_TASK",
    UPDATED_TASK = "UPDATED_TASK",
    ADDED_TASK = "ADDED_TASK"
}

// Step 3 - Define for each action its own payload
export interface TaskAction {
    type: TaskActionType;
    payload: any;
}

// Step 4 - Creator Function which handle the payload per action
export function downloadedTasks(tasks: Task[]): TaskAction {
    return {type: TaskActionType.DOWNLOADED_ALL, payload: tasks};
}

export function downloadSingleTask(task: Task): TaskAction {
    return {type: TaskActionType.DOWNLOADED_ONE, payload: task};
}

export function updatedTask(task: Task): TaskAction {
    return {type: TaskActionType.UPDATED_TASK, payload: task};
}


export function deletedTask(id: number): TaskAction {
    return {type: TaskActionType.DELETED_TASK, payload: id};
}

export function addedTask(task: Task): TaskAction {
    return {type: TaskActionType.ADDED_TASK, payload: task};
}


// Step 5 - Reducer function perform the required action
export function tasksReducer(currentState: TaskAppState = new TaskAppState(), action: TaskAction): TaskAppState {


    const newState = {...currentState} //Spread Operator
    switch (action.type) {
        case TaskActionType.DOWNLOADED_ALL:
            newState.tasks = action.payload;
            break;
        case TaskActionType.ADDED_TASK: {
            newState.tasks.push(action.payload);
            break;
        }
        case TaskActionType.DELETED_TASK: {
            const id = action.payload;
            newState.tasks = newState.tasks.filter(task => task.id !== id);
            break;
        }
        case TaskActionType.DOWNLOADED_ONE:
        case TaskActionType.UPDATED_TASK: {

            const id = action.payload.id;
            const idx = newState.tasks.findIndex(task => task.id === id);
            newState.tasks[idx] = action.payload;
            //   newState.tasks = Object.assign({},newState.tasks);
            // newState.tasks = [...newState.tasks];
            break;
        }
    }
    return newState;

}
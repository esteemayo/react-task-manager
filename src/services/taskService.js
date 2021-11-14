import http from './httpService';

const apiEndpoint = '/tasks';

const taskUrl = (taskID) => {
    return `${apiEndpoint}/${taskID}`;
};

export function getTasks() {
    return http.get(apiEndpoint);
};

export function getTask(taskID) {
    return http.get(taskUrl(taskID));
};

export function getTaskBySlug(slug) {
    return http.get(`${apiEndpoint}/details/${slug}`);
};

export function createTask(task) {
    return http.post(apiEndpoint, task);
};

export function updateTask(taskID, task) {
    return http.patch(taskUrl(taskID), task);
};

export function deleteTask(taskID) {
    return http.delete(taskUrl(taskID));
};

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as taskService from 'services/taskService';

export const getTasksAsync = createAsyncThunk('tasks/getTasksAsync', async () => {
    const { data: { data: { docs } } } = await taskService.getTasks();
    return docs;
});

export const getTaskAsync = createAsyncThunk('tasks/getTaskAsync', async (taskID) => {
    const { data: { data: { doc } } } = await taskService.getTask(taskID);
    return doc;
});

export const createTaskAsync = createAsyncThunk('tasks/createTaskAsync', async (task) => {
    const { data: { data: { doc } } } = await taskService.createTask(task);
    return doc;
});

export const updateTaskAsync = createAsyncThunk('tasks/updateTaskAsync', async (taskID, task) => {
    const { data: { data: { doc } } } = await taskService.updateTask(taskID, task);
    return doc;
});

export const deleteTaskAsync = createAsyncThunk('tasks/deleteTaskAsync', async (taskID) => {
    await taskService.deleteTask(taskID);
});

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        task: {},
    },
    extraReducers: {
        [getTasksAsync.fulfilled]: (state, { payload }) => {
            state.tasks = payload;
        },
        [getTaskAsync.fulfilled]: (state, { payload }) => {
            state.task = payload;
        },
        [createTaskAsync.fulfilled]: (state, { payload }) => {
            state.tasks.unshift(payload);
        },
        [updateTaskAsync.fulfilled]: (state, { payload }) => {
            state.tasks = state.tasks.map((task) => (
                task._id !== payload.taskID ? task : { ...task, name: payload.name, completed: payload.completed }
            ));
        },
        [deleteTaskAsync.fulfilled]: (state, { payload }) => {
            state.tasks = state.tasks.filter((task) => task._id !== payload);
        },
    }
});

export default taskSlice.reducer;

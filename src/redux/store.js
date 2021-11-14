import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './tasks';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
});

export default store;

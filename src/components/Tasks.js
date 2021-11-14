import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTasksAsync } from 'redux/tasks';
import Task from './Task';

const Tasks = () => {
    const { tasks } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasksAsync());
    }, [dispatch]);

    if (tasks.length < 1) {
        return (
            <section className='tasks-container'>
                <div className='tasks'>
                    <h5 className='empty-list'>No tasks in your list</h5>
                </div>
            </section>
        );
    }

    return (
        <section className='tasks-container'>
            <p className='loading-text'>Loading...</p>
            <div className='tasks'>
                {tasks?.map((task) => {
                    return (
                        <Task key={task._id} {...task} />
                    )
                })}
            </div>
        </section>
    );
};

export default Tasks;

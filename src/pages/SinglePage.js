import { Link, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';
import { updateTask } from 'services/taskService'
import { getTaskBySlug } from 'services/taskService';

const SinglePage = () => {
    const { pathname } = useLocation();
    const path = pathname.split('/')[2];

    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [completed, setCompleted] = useState(false);

    const fetchTask = useCallback(async () => {
        const { data: { data: { doc } } } = await getTaskBySlug(path);

        setId(doc._id);
        setName(doc.name);
        setCompleted(doc.completed);
    }, [path]);

    useEffect(() => {
        fetchTask();
    }, [fetchTask]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updTask = { name, completed };
            await updateTask(id, updTask);
            window.location.replace('/');
        } catch (err) {
            console.log(err.response.data.message);
        }
    };

    return (
        <div className='container'>
            <form className='single-task-form' onSubmit={handleSubmit}>
                <h4>Edit Task</h4>
                <div className='form-control'>
                    <label>Task ID</label>
                    <p className='task-edit-id'>{id}</p>
                </div>
                <Input
                    type='text'
                    name='name'
                    label='Name'
                    value={name}
                    className='task-edit-name'
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    type='checkbox'
                    name='completed'
                    label='completed'
                    className='task-edit-completed'
                    checked={completed}
                    onChange={(e) => setCompleted(e.currentTarget.checked)}
                />

                <Button
                    type='submit'
                    text='edit'
                    className='block btn task-edit-btn'
                />

                <div className='form-alert'></div>
            </form>
            <Link to='/' className='btn back-link'>back to tasks</Link>
        </div>
    );
};

export default SinglePage;

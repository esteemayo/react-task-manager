import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaTrash, FaEdit } from 'react-icons/fa';

import Button from './Button';
import { deleteTaskAsync } from 'redux/tasks';

const Task = ({ _id, name, slug, completed }) => {
    const dispatch = useDispatch();

    const handleDelete = (taskID) => {
        dispatch(deleteTaskAsync(taskID));
        window.location.reload();
    };

    return (
        <div className={`single-task ${completed && 'task-completed'}`}>
            <h5><span><FaCheckCircle /></span>{name}</h5>
            <div className='task-links'>

                <Link to={`/task/${slug}`} className='edit-link'><FaEdit /></Link>

                <Button
                    type='button'
                    icon={<FaTrash />}
                    className='delete-btn'
                    onClick={() => handleDelete(_id)}
                />
            </div>
        </div>
    );
};

export default Task;

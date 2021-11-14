import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTaskAsync } from 'redux/tasks';

const AddTask = () => {
    const dispatch = useDispatch();
    const nameInputRef = useRef();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const name = nameInputRef.current.value;
        const errors = {};

        if (name.trim() === '') {
            errors.name = 'Name must not be empty';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setErrors({});

        const name = nameInputRef.current.value;
        const newTask = { name };

        try {
            dispatch(createTaskAsync(newTask));
            nameInputRef.current.value = '';
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form className="task-form" onSubmit={handleSubmit}>
                <h4>task manager</h4>
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        className="task-input"
                        placeholder="e.g. wash dishes"
                        ref={nameInputRef}
                    />
                    <button type="submit" className="btn submit-btn">submit</button>
                </div>
                {errors.name && <div className="form-alert">{errors.name}</div>}
            </form>
        </div>
    );
};

export default AddTask;

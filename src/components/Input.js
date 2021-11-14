const Input = ({ name, label, ...rest }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <input {...rest} id={name} name={name} />
        </div>
    );
};

export default Input;

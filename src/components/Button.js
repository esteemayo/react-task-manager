import PropTypes from 'prop-types';

const Button = ({ type, text, icon, className, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {icon} {text}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.object,
};

export default Button;

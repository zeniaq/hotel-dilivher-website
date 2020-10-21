import PropTypes from "prop-types";

const Button = ({ children, className }) => (
    <button className={className} type="button">
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Button.defaultProps = {
    className: "",
};

export default Button;

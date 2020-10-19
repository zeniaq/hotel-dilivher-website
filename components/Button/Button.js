import PropTypes from "prop-types";
import styles from "../../styles/Button.module.css";

const Button = ({ children, className }) => (
    <button className={styles[className]} type="button">
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

import PropTypes from "prop-types";

const Navigation = ({ classHeader, classLogo, strongText, spanText }) => (
    <header className={classHeader}>
        <a className={classLogo} href="index.html">
            <strong>{strongText}</strong>
            <span>{spanText}</span>
        </a>
        <nav>
            <a href="#menu">Menu</a>
        </nav>
    </header>
);

Navigation.propTypes = {
    classHeader: PropTypes.string,
    classLogo: PropTypes.string,
    strongText: PropTypes.node.isRequired,
    spanText: PropTypes.node.isRequired,
};

Navigation.defaultProps = {
    classHeader: "",
    classLogo: "",
};

export default Navigation;

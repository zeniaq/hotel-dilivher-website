import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const Navigation = ({ classStyle, strongText, spanText }) => {
    const classReserve = `${styles.alt} ${classStyle} ${styles.header}`;
    return (
        <header className={classReserve}>
            <a className={styles.logo} href="/">
                <strong>{strongText}</strong>
                <span>{spanText}</span>
            </a>
            <nav>
                <a href="#menu">Menu</a>
            </nav>
        </header>
    );
};

Navigation.propTypes = {
    classStyle: PropTypes.string,
    strongText: PropTypes.string,
    spanText: PropTypes.string,
};

Navigation.defaultProps = {
    classStyle: "",
    strongText: "",
    spanText: "",
};

export default Navigation;

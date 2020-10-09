import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const Navigation = ({ classStyle, strongText, spanText }) => {
    const classReserve = `${styles.alt} ${classStyle}`;
    return (
        <header id={styles.header} className={styles.reveal, styles.alt}>
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
    strongText: PropTypes.node.isRequired,
    spanText: PropTypes.node.isRequired,
};

Navigation.defaultProps = {
    classStyle: "",
};

export default Navigation;

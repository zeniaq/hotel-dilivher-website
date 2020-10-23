import PropTypes from "prop-types";
import styles from "../../styles/Icon.module.css";

const Icon = ({ iconSrc, url, linkRef, titleText, descriptionText1, descriptionText2 }) => {
    const classSocial = `${styles.icon} ${styles.brands} ${styles.alt}`;
    const classContact = `${styles.icon} ${styles.solid} ${styles.alt}`;
    const nav = descriptionText2 ? (
        <span>
            {descriptionText1}
            <br />
            {descriptionText2}
        </span>
    ) : (
        <span>{descriptionText1}</span>
    );
    return url ? (
        <li key={iconSrc}>
            <a href={url} className={classSocial}>
                <img
                    className={styles.i}
                    src={iconSrc}
                    alt="Social Icon"
                    width="40px"
                    height="40px"
                />
            </a>
        </li>
    ) : (
        <section>
            <div className={styles.contactMethod}>
                <span className={classContact}>
                    <img
                        className={styles.i}
                        src={iconSrc}
                        alt="Contact Icon"
                        width="40px"
                        height="40px"
                    />
                </span>
                <h3>{titleText}</h3>
                {linkRef ? <a href={linkRef}>{descriptionText1}</a> : nav}
            </div>
        </section>
    );
};
Icon.propTypes = {
    titleText: PropTypes.string,
    descriptionText1: PropTypes.string,
    descriptionText2: PropTypes.string,
    url: PropTypes.string,
    iconSrc: PropTypes.string,
    linkRef: PropTypes.string,
};

Icon.defaultProps = {
    titleText: "",
    descriptionText1: "",
    descriptionText2: "",
    url: "",
    iconSrc: "",
    linkRef: "",
};
export default Icon;

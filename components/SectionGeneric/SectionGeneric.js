import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const SectionGeneric = ({
    titleText,
    descriptionText1,
    descriptionText2,
    descriptionText3,
    imageSrc,
}) => {
    const classSpan = `${styles.image} ${styles.main}`;
    return (
        <section id={styles.one}>
            <div className={styles.inner}>
                <header className={styles.major}>
                    <h1>{titleText}</h1>
                </header>
                <span className={classSpan}>
                    <img src={imageSrc} alt={titleText} />
                </span>
                <p>{descriptionText1}</p>
                <p>{descriptionText2}</p>
                <p>{descriptionText3}</p>
            </div>
        </section>
    );
};

SectionGeneric.propTypes = {
    titleText: PropTypes.node.isRequired,
    descriptionText1: PropTypes.string,
    descriptionText2: PropTypes.string,
    descriptionText3: PropTypes.string,
    imageSrc: PropTypes.node.isRequired,
};
SectionGeneric.defaultProps = {
    descriptionText1: "",
    descriptionText2: "",
    descriptionText3: "",
};
export default SectionGeneric;
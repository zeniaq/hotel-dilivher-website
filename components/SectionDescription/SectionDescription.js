import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const SectionDescription = ({ classID, linkRef, titleText, descriptionText, textButton }) => {
    const classStarted = `${styles.button} ${styles.next}`;
    return (
        <section id={classID} className={styles.major}>
            <div className={styles.inner}>
                <header className={styles.major}>
                    <h2>{titleText}</h2>
                </header>
                <p>{descriptionText}</p>
                {textButton !== undefined ? (
                    <ul className={styles.actions}>
                        <li>
                            <a href={linkRef} className={classStarted}>
                                {textButton}
                            </a>
                        </li>
                    </ul>
                ) : null}
            </div>
        </section>
    );
};

SectionDescription.propTypes = {
    linkRef: PropTypes.node.isRequired,
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    textButton: PropTypes.node.isRequired,
    classID: PropTypes.node.isRequired,
};

export default SectionDescription;

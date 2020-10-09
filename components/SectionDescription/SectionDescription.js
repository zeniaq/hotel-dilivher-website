import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const SectionDescription = ({ linkRef, titleText, descriptionText, textButton }) => {
    const classStarted = `${styles.button} ${styles.next}`;
    return (
        <section id={styles.two} className={styles.major}>
            <div className={styles.inner}>
                <header className={styles.major}>
                    <h2>{titleText}</h2>
                </header>
                <p>{descriptionText}</p>
                <ul className={styles.actions}>
                    <li>
                        <a href={linkRef} className={classStarted}>
                            {textButton}
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

SectionDescription.propTypes = {
    linkRef: PropTypes.node.isRequired,
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    textButton: PropTypes.node.isRequired,
};

export default SectionDescription;

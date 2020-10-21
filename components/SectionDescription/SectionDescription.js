import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";
import AnchorList from "../AnchorList/AnchorList";

const SectionDescription = ({ classID, linkRef, titleText, descriptionText, textButton }) => {
    const classStarted = `${styles.button} ${styles.next}`;
    const classDescription = `${classID} ${styles.major}`;
    return (
        <section id={classID} className={classDescription} key={classID}>
            <div className={styles.inner}>
                <header className={styles.major}>
                    <h2>{titleText}</h2>
                </header>
                <p>{descriptionText}</p>
                {textButton ? (
                    <ul className={styles.actions}>
                        <AnchorList
                            linkRef={linkRef}
                            styleProp={classStarted}
                            titleText={textButton}
                        />
                    </ul>
                ) : null}
            </div>
        </section>
    );
};

SectionDescription.propTypes = {
    linkRef: PropTypes.string,
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
    textButton: PropTypes.string,
    classID: PropTypes.string,
};
SectionDescription.defaultProps = {
    linkRef: "",
    titleText: "",
    descriptionText: "",
    textButton: "",
    classID: "",
};

export default SectionDescription;

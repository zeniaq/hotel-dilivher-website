import PropTypes from "prop-types";
import styles from "../../styles/SectionRooms.module.css";
import AnchorList from "../AnchorList/AnchorList";

const SectionRooms = ({ titleText, descriptionText, imageSrc, linkRef, dataPosition }) => (
    <section>
        <a href={linkRef} className={styles.image}>
            <img src={imageSrc} alt={titleText} data-position={dataPosition} />
        </a>
        <div className={styles.content}>
            <div className={styles.inner}>
                <header>
                    <h3>{titleText}</h3>
                </header>
                <p>{descriptionText}</p>
                <ul className={styles.actions}>
                    <AnchorList
                        linkRef={linkRef}
                        styleProp={styles.button}
                        titleText="Learn More"
                    />
                </ul>
            </div>
        </div>
    </section>
);

SectionRooms.propTypes = {
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
    imageSrc: PropTypes.string,
    linkRef: PropTypes.string,
    dataPosition: PropTypes.string,
};

SectionRooms.defaultProps = {
    titleText: "",
    descriptionText: "",
    imageSrc: "",
    linkRef: "",
    dataPosition: "",
};

export default SectionRooms;

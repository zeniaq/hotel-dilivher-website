import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

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
                    <li>
                        <a href={linkRef} className={styles.button}>
                            Learn More
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

SectionRooms.propTypes = {
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    imageSrc: PropTypes.node.isRequired,
    linkRef: PropTypes.node.isRequired,
    dataPosition: PropTypes.node.isRequired,
};

export default SectionRooms;

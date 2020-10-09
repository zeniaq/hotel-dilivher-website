import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const SectionArticle = ({ titleText, descriptionText, imageSrc, linkRef }) => (
    <article>
        <span className={styles.image}>
            <img src={imageSrc} alt={titleText} />
        </span>
        <header className={styles.major}>
            <h3>
                <a href={linkRef} className={styles.link}>
                    {titleText}
                </a>
            </h3>
            <p>{descriptionText}</p>
        </header>
    </article>
);

SectionArticle.propTypes = {
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    imageSrc: PropTypes.node.isRequired,
    linkRef: PropTypes.node.isRequired,
};

export default SectionArticle;

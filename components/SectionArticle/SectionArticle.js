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
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
    imageSrc: PropTypes.string,
    linkRef: PropTypes.string,
};

SectionArticle.defaultProps = {
    titleText: "",
    descriptionText: "",
    imageSrc: "",
    linkRef: "",
};

export default SectionArticle;

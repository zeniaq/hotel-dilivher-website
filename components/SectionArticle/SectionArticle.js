import PropTypes from "prop-types";
import styles from "../../styles/SectionArticle.module.css";

const SectionArticle = ({ titleText, descriptionText, imageSrc, linkRef }) => (
    <article style={{ backgroundImage: `url(${imageSrc})` }}>
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

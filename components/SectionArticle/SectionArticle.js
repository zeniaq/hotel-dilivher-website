import PropTypes from "prop-types";

const SectionArticle = ({
    classImage,
    classMajor,
    classLink,
    titleText,
    descriptionText,
    imageSrc,
    linkRef,
}) => (
    <article>
        <span className={classImage}>
            <img src={imageSrc} alt={titleText} />
        </span>
        <header className={classMajor}>
            <h3>
                <a href={linkRef} className={classLink}>
                    {titleText}
                </a>
            </h3>
            <p>{descriptionText}</p>
        </header>
    </article>
);

SectionArticle.propTypes = {
    classImage: PropTypes.string,
    classMajor: PropTypes.string,
    classLink: PropTypes.string,
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    imageSrc: PropTypes.node.isRequired,
    linkRef: PropTypes.node.isRequired,
};

SectionArticle.defaultProps = {
    classImage: "",
    classMajor: "",
    classLink: "",
};

export default SectionArticle;

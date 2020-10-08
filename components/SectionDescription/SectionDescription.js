import PropTypes from "prop-types";

const SectionDescription = ({
    classInner,
    classMajor,
    classActions,
    classButton,
    classNext,
    linkRef,
    titleText,
    descriptionText,
    textButton,
}) => {
    const classStarted = `${classButton} ${classNext}`;
    return (
        <section id="two" className={classMajor}>
            <div className={classInner}>
                <header className={classMajor}>
                    <h2>{titleText}</h2>
                </header>
                <p>{descriptionText}</p>
                <ul className={classActions}>
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
    classInner: PropTypes.string,
    classMajor: PropTypes.string,
    classActions: PropTypes.string,
    classButton: PropTypes.string,
    classNext: PropTypes.string,
    linkRef: PropTypes.node.isRequired,
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    textButton: PropTypes.node.isRequired,
};

SectionDescription.defaultProps = {
    classInner: "",
    classMajor: "",
    classActions: "",
    classButton: "",
    classNext: "",
};

export default SectionDescription;

import PropTypes from "prop-types";

const Banner = ({
    classInner,
    classMajor,
    classContent,
    classActions,
    classButton,
    classNext,
    classScrolly,
    titleText,
    descriptionText,
    textButton,
}) => {
    const classReserve = `${classButton} ${classNext} ${classScrolly}`;
    return (
        <section id="banner" className={classMajor}>
            <div className={classInner}>
                <header className={classMajor}>
                    <h1>{titleText}</h1>
                </header>
                <div className={classContent}>
                    <p>{descriptionText}</p>
                    <ul className={classActions}>
                        <li>
                            <a href="#one" className={classReserve}>
                                {textButton}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

Banner.propTypes = {
    classInner: PropTypes.string,
    classMajor: PropTypes.string,
    classContent: PropTypes.string,
    classActions: PropTypes.string,
    classButton: PropTypes.string,
    classNext: PropTypes.string,
    classScrolly: PropTypes.string,
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    textButton: PropTypes.node.isRequired,
};

Banner.defaultProps = {
    classInner: "",
    classMajor: "",
    classContent: "",
    classActions: "",
    classButton: "",
    classNext: "",
    classScrolly: "",
};

export default Banner;

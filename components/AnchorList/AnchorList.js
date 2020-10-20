import PropTypes from "prop-types";

const AnchorList = ({ styleProp, linkRef, titleText, titleText2 }) => {
    return linkRef ? (
        <li>
            {titleText2 || null}
            {styleProp ? (
                <a href={linkRef} className={styleProp}>
                    {titleText}
                </a>
            ) : (
                <a href={linkRef}>{titleText}</a>
            )}
        </li>
    ) : (
        <li>{titleText}</li>
    );
};
AnchorList.propTypes = {
    titleText: PropTypes.string,
    titleText2: PropTypes.string,
    styleProp: PropTypes.string,
    linkRef: PropTypes.string,
};

AnchorList.defaultProps = {
    titleText: "",
    titleText2: "",
    styleProp: "",
    linkRef: "",
};
export default AnchorList;

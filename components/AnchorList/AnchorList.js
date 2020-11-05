import PropTypes from "prop-types";
import { Li, Anchor } from "./styled";

const AnchorList = ({ styleProp, linkRef, titleText, titleText2 }) => {
    return linkRef ? (
        <Li key={titleText}>
            {titleText2 || null}
            {styleProp ? (
                <Anchor href={linkRef} anchorStyle={styleProp}>
                    {titleText}
                </Anchor>
            ) : (
                <Anchor href={linkRef}>{titleText}</Anchor>
            )}
        </Li>
    ) : (
        <Li key={titleText}>{titleText}</Li>
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

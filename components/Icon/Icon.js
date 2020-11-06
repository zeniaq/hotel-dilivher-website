import PropTypes from "prop-types";
import { Li, Anchor, Span, Img, Section, H3, Div } from "./styled";

const Icon = ({ iconSrc, url, linkRef, titleText, descriptionText1, descriptionText2 }) => {
    return url ? (
        <Li key={iconSrc}>
            <Anchor href={url} typeAnchor="icon">
                <Img src={iconSrc} alt="Social Icon" width="40px" height="40px" />
            </Anchor>
        </Li>
    ) : (
        <Section>
            <Div>
                <Span typeAnchor="icon">
                    <Img src={iconSrc} alt="Contact Icon" width="40px" height="40px" />
                </Span>
                <H3>{titleText}</H3>
                <Anchor href={linkRef}>
                    {descriptionText1}
                    <br />
                    {descriptionText2}
                </Anchor>
            </Div>
        </Section>
    );
};
Icon.propTypes = {
    titleText: PropTypes.string,
    descriptionText1: PropTypes.string,
    descriptionText2: PropTypes.string,
    url: PropTypes.string,
    iconSrc: PropTypes.string,
    linkRef: PropTypes.string,
};

Icon.defaultProps = {
    titleText: "",
    descriptionText1: "",
    descriptionText2: "",
    url: "",
    iconSrc: "",
    linkRef: "",
};
export default Icon;

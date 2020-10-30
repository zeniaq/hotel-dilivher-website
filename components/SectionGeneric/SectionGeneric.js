import PropTypes from "prop-types";
import { Section, Div, Span, Header, H1, P, Img } from "./styled";

const SectionGeneric = ({
    titleText,
    descriptionText1,
    descriptionText2,
    descriptionText3,
    imageSrc,
}) => {
    return (
        <Section>
            <Div>
                <Header>
                    <H1>{titleText}</H1>
                </Header>
                <Span>
                    <Img src={imageSrc} alt={titleText} />
                </Span>
                <P>{descriptionText1}</P>
                <P>{descriptionText2}</P>
                <P>{descriptionText3}</P>
            </Div>
        </Section>
    );
};

SectionGeneric.propTypes = {
    titleText: PropTypes.string,
    descriptionText1: PropTypes.string,
    descriptionText2: PropTypes.string,
    descriptionText3: PropTypes.string,
    imageSrc: PropTypes.string,
};
SectionGeneric.defaultProps = {
    descriptionText1: "",
    descriptionText2: "",
    descriptionText3: "",
    titleText: "",
    imageSrc: "",
};
export default SectionGeneric;

import PropTypes from "prop-types";
import AnchorList from "../AnchorList/AnchorList";
import { Section, Div, Header, H2, Ul, P } from "./styled";

const SectionDescription = ({ classID, linkRef, titleText, descriptionText, textButton }) => {
    return (
        <Section id={classID} key={classID}>
            <Div>
                <Header>
                    <H2>{titleText}</H2>
                </Header>
                <P>{descriptionText}</P>
                {textButton ? (
                    <Ul>
                        <AnchorList linkRef={linkRef} titleText={textButton} />
                    </Ul>
                ) : null}
            </Div>
        </Section>
    );
};

SectionDescription.propTypes = {
    linkRef: PropTypes.string,
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
    textButton: PropTypes.string,
    classID: PropTypes.string,
};
SectionDescription.defaultProps = {
    linkRef: "",
    titleText: "",
    descriptionText: "",
    textButton: "",
    classID: "",
};

export default SectionDescription;

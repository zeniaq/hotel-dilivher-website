import PropTypes from "prop-types";
import AnchorList from "../AnchorList/AnchorList";
import { Section, Div1, Div2, Ul, Header, H3, P, Img, Anchor } from "./styled";

const SectionRooms = ({ titleText, descriptionText, imageSrc, linkRef, dataPosition }) => (
    <Section>
        <Anchor href={linkRef}>
            <Img src={imageSrc} alt={titleText} data-position={dataPosition} />
        </Anchor>
        <Div1>
            <Div2>
                <Header>
                    <H3>{titleText}</H3>
                </Header>
                <P>{descriptionText}</P>
                <Ul>
                    <AnchorList linkRef={linkRef} titleText="Learn More" />
                </Ul>
            </Div2>
        </Div1>
    </Section>
);

SectionRooms.propTypes = {
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
    imageSrc: PropTypes.string,
    linkRef: PropTypes.string,
    dataPosition: PropTypes.string,
};

SectionRooms.defaultProps = {
    titleText: "",
    descriptionText: "",
    imageSrc: "",
    linkRef: "",
    dataPosition: "",
};

export default SectionRooms;

import PropTypes from "prop-types";
import AnchorList from "../AnchorList/AnchorList";
import { Section, Div1, Div2, Header, H1, P, Ul } from "./styled";

const Banner = ({ titleText, descriptionText1, descriptionText2, textButton, imageSrc }) => {
    return (
        <Section style={{ backgroundImage: `url(${imageSrc})` }}>
            <Div1>
                <Header>
                    <H1>{titleText}</H1>
                </Header>
                <Div2>
                    <P>
                        {descriptionText1}
                        <br />
                        {descriptionText2}
                    </P>
                    {textButton ? (
                        <Ul>
                            <AnchorList linkRef="#one" titleText={textButton} />
                        </Ul>
                    ) : null}
                </Div2>
            </Div1>
        </Section>
    );
};

Banner.propTypes = {
    titleText: PropTypes.string,
    descriptionText1: PropTypes.string,
    descriptionText2: PropTypes.string,
    textButton: PropTypes.string,
    imageSrc: PropTypes.string,
};

Banner.defaultProps = {
    titleText: "",
    descriptionText1: "",
    descriptionText2: "",
    textButton: "",
    imageSrc: "",
};

export default Banner;

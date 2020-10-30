import PropTypes from "prop-types";
import { Article, Header, H3, Anchor, P } from "./styled";

const SectionArticle = ({ titleText, descriptionText, imageSrc, linkRef }) => (
    <Article style={{ backgroundImage: `url(${imageSrc})` }}>
        <Header>
            <H3>
                <Anchor href={linkRef}>{titleText}</Anchor>
            </H3>
            <P>{descriptionText}</P>
        </Header>
    </Article>
);

SectionArticle.propTypes = {
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
    imageSrc: PropTypes.string,
    linkRef: PropTypes.string,
};

SectionArticle.defaultProps = {
    titleText: "",
    descriptionText: "",
    imageSrc: "",
    linkRef: "",
};

export default SectionArticle;

import PropTypes from "prop-types";
import styles from "../../styles/SectionArticle.module.css";
import { Article, Header, H3, Anchor, P } from "./styled";

const SectionArticle = ({ titleText, descriptionText, imageSrc, linkRef }) => (
    <Article style={{ backgroundImage: `url(${imageSrc})` }}>
        <Header className={styles.major}>
            <H3>
                <Anchor href={linkRef} className={styles.link}>
                    {titleText}
                </Anchor>
            </H3>
            <Anchor>{descriptionText}</Anchor>
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

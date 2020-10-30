import PropTypes from "prop-types";
import styles from "../../styles/Banner.module.css";
import AnchorList from "../AnchorList/AnchorList";
import { Section, Div, Header, H1, P, Ul } from "./styled";

const Banner = ({ titleText, descriptionText1, descriptionText2, textButton, imageSrc }) => {
    const classReserve = `${styles.button} ${styles.next} ${styles.scrolly}`;
    const classBanner = `${styles.banner} ${styles.major}`;
    return (
        <Section className={classBanner} style={{ backgroundImage: `url(${imageSrc})` }}>
            <Div className={styles.inner}>
                <Header className={styles.major}>
                    <H1>{titleText}</H1>
                </Header>
                <Div className={styles.content}>
                    <P>
                        {descriptionText1}
                        <br />
                        {descriptionText2}
                    </P>
                    {textButton ? (
                        <Ul className={styles.actions}>
                            <AnchorList
                                linkRef="#one"
                                styleProp={classReserve}
                                titleText={textButton}
                            />
                        </Ul>
                    ) : null}
                </Div>
            </Div>
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

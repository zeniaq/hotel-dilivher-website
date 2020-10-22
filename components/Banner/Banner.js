import PropTypes from "prop-types";
import styles from "../../styles/Banner.module.css";
import AnchorList from "../AnchorList/AnchorList";

const Banner = ({ titleText, descriptionText1, descriptionText2, textButton, imageSrc }) => {
    const classReserve = `${styles.button} ${styles.next} ${styles.scrolly}`;
    const classBanner = `${styles.banner} ${styles.major}`;
    return (
        <section className={classBanner} style={{ backgroundImage: `url(${imageSrc})` }}>
            <div className={styles.inner}>
                <header className={styles.major}>
                    <h1>{titleText}</h1>
                </header>
                <div className={styles.content}>
                    <p>
                        {descriptionText1}
                        <br />
                        {descriptionText2}
                    </p>
                    {textButton ? (
                        <ul className={styles.actions}>
                            <AnchorList
                                linkRef="#one"
                                styleProp={classReserve}
                                titleText={textButton}
                            />
                        </ul>
                    ) : null}
                </div>
            </div>
        </section>
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

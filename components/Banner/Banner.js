import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const Banner = ({ titleText, descriptionText1, descriptionText2, textButton, imageSrc }) => {
    const classReserve = `${styles.button} ${styles.next} ${styles.scrolly}`;
    const classBanner = `${styles.banner} ${styles.major}`;
    return (
        <section className={classBanner}>
            <div className={styles.inner}>
                {imageSrc ? (
                    <span className={styles.image}>
                        <img src={imageSrc} alt={titleText} />
                    </span>
                ) : null}
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
                            <li>
                                <a href="#one" className={classReserve}>
                                    {textButton}
                                </a>
                            </li>
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

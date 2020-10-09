import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const Banner = ({ titleText, descriptionText1, descriptionText2, textButton, imageSrc }) => {
    const classReserve = `${styles.button} ${styles.next} ${styles.scrolly}`;
    return (
        <section id={styles.banner} className={styles.major}>
            <div className={styles.inner}>
                {imageSrc !== "" ? (
                    <span className={styles.image}>
                        {/* <img src={imageSrc} alt={titleText} /> */}
                    </span>
                ) : null}
                <header className={styles.major}>
                    <h1>{titleText}</h1>
                </header>
                <div className={styles.content}>
                    <p>{descriptionText1}<br></br>
                    {descriptionText2}
                    </p>
                    {textButton !== undefined ? (
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
    titleText: PropTypes.node.isRequired,
    descriptionText: PropTypes.node.isRequired,
    textButton: PropTypes.node.isRequired,
    imageSrc: PropTypes.node.isRequired,
};

export default Banner;

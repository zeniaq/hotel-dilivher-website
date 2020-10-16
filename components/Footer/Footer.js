import styles from "../../styles/Home.module.css";

const Footer = () => {
    const classTwitter = `${styles.icon} ${styles.brands} ${styles.alt}`;
    const classFacebook = `${styles.icon} ${styles.brands} ${styles.alt}`;
    const classInstagram = `${styles.icon} ${styles.brands} ${styles.alt}`;
    const classGithub = `${styles.icon} ${styles.brands} ${styles.alt}`;
    const classLinkedin = `${styles.icon} ${styles.brands} ${styles.alt}`;
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <ul className={styles.icons}>                
                    <li>
                        <a href="#a" className={classTwitter}>
                            <i className="fab fa-twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="#a" className={classFacebook}>
                            <i className="fab fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#a" className={classInstagram}>
                            <i className="fab fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#a" className={classGithub}>
                            <i className="fab fa-github" />
                        </a>
                    </li>
                    <li>
                        <a href="#a" className={classLinkedin}>
                            <i className="fab fa-linkedin" />
                        </a>
                    </li>
                </ul>
                <ul className={styles.copyright}>
                    <li>&copy; 2020 Hotel Dilivher</li>
                    <li>
                        Powered by: <a href="https://zeniaq.com">Zeniaq Technologies</a>
                    </li>
                    <li>
                        Design: <a href="https://html5up.net">HTML5 UP</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;

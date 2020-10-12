import styles from "../../styles/Home.module.css";

const Footer = () => {
    const classTwitter = `${styles.icon} ${styles.brands} ${styles.alt} ${styles.iconTwitter}`;
    const classFacebook = `${styles.icon} ${styles.brands} ${styles.alt} ${styles.iconFacebook}`;
    const classInstagram = `${styles.icon} ${styles.brands} ${styles.alt} ${styles.iconInstagram}`;
    const classGithub = `${styles.icon} ${styles.brands} ${styles.alt} ${styles.iconGithub}`;
    const classLinkedin = `${styles.icon} ${styles.brands} ${styles.alt} ${styles.iconLinkedin}`;
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <ul className={styles.icons}>
                    <li>
                        <a href="#a" className={classTwitter}>
                            <span className={styles.label}>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#b" className={classFacebook}>
                            <span className={styles.label}>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#c" className={classInstagram}>
                            <span className={styles.label}>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#d" className={classGithub}>
                            <span className={styles.label}>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="#e" className={classLinkedin}>
                            <span className={styles.label}>LinkedIn</span>
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

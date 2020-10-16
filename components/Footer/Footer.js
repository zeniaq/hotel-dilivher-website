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
                        <a href="#a" class={classTwitter}>
                            <img className={styles.home} src="/icons/twitter.svg" alt="twitter icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#b" class={classFacebook}>
                            <img className={styles.home} src="/icons/facebook.svg" alt="facebook icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#c" class={classInstagram}>
                            <img className={styles.home} src="/icons/instagram.svg" alt="instagram icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#d" class={classGithub}>
                            <img className={styles.home} src="/icons/github.svg" alt="github icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#e" class={classLinkedin}>
                            <img className={styles.home} src="/icons/linkedin.svg" alt="linkedin icon" />
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

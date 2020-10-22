import styles from "../../styles/Footer.module.css";
import { dataSocial } from "../Icon/icons";
import { dataMaster } from "../AnchorList/anchors";
import Icon from "../Icon";
import AnchorList from "../AnchorList/AnchorList";

const Footer = () => {
    const data = dataSocial.map((icons) => (
        <Icon url={icons.url} iconSrc={icons.iconSrc} key={icons.iconSrc} />
    ));
    const data2 = dataMaster.map((anchors) => (
        <AnchorList
            titleText={anchors.titleText}
            titleText2={anchors.titleText2}
            linkRef={anchors.linkRef}
            key={anchors.titleText}
        />
    ));
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <ul className={styles.icons}>{data}</ul>
                <ul className={styles.copyright}>{data2}</ul>
            </div>
        </footer>
    );
};
export default Footer;

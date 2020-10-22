import styles from "../../styles/MenuNav.module.css";
import AnchorList from "../AnchorList/AnchorList";
import { dataLinks, dataForm } from "../AnchorList/anchors";

// eslint-disable-next-line react/prop-types
const MenuNav = ({ display, setDisplay }) => {
    const classForm = `${styles.actions} ${styles.stacked}`;
    const classMenu = `${styles.menu} ${styles.menuMove}`;

    const data1 = dataLinks.map((anchors) => (
        <AnchorList
            titleText={anchors.titleText}
            titleText2={anchors.titleText2}
            linkRef={anchors.linkRef}
        />
    ));
    const data2 = dataForm.map((anchors) => (
        <AnchorList
            titleText={anchors.titleText}
            linkRef={anchors.linkRef}
            styleProp={anchors.styleProp}
        />
    ));
    return display ? (
        <nav onClick={() => setDisplay(!display)} className={classMenu} role="presentation">
            <ul className={styles.links}>{data1}</ul>
            <ul className={classForm}>{data2}</ul>
        </nav>
    ) : null;
};

export default MenuNav;

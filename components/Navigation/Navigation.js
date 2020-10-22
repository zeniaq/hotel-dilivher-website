import React, { useState, useEffect } from "react";
import MenuNav from "../MenuNav";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => {
    const [click, setClick] = useState(false);
    const [classAction, setClassAction] = useState(
        `${styles.alt} ${styles.reveal} ${styles.header}`,
    );

    function handleAnimation() {
        // eslint-disable-next-line no-undef
        if (document.documentElement.scrollTop > 500) {
            setClassAction(`${styles.reveal} ${styles.header}`);
        }
        // eslint-disable-next-line no-undef
        if (document.documentElement.scrollTop < 500) {
            setClassAction(`${styles.alt} ${styles.reveal} ${styles.header}`);
        }
    }
    useEffect(() => {
        // eslint-disable-next-line no-undef
        const body = document.querySelector("body");
        body.style.overflow = click ? "hidden" : "visible";
        // eslint-disable-next-line no-undef
        window.onscroll = () => handleAnimation();
    });
    return (
        <>
            <header className={classAction}>
                <a className={styles.logo} href="/">
                    <strong>Hotel</strong>
                    <span>Dilivher</span>
                </a>
                <nav>
                    <button
                        type="button"
                        id="menuButton"
                        className={click ? styles.noStyleButtonAfter : styles.noStyleButton}
                        onClick={() => setClick(!click)}
                    >
                        {click ? null : "Menu"}
                    </button>
                </nav>
            </header>
            <MenuNav display={click} setDisplay={setClick} />
        </>
    );
};

export default Navigation;

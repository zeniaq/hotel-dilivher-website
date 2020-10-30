import React, { useState, useEffect } from "react";
import MenuNav from "../MenuNav";
import styles from "../../styles/Navigation.module.css";
import { Header, Nav, Span, Strong, Anchor, Button } from "./styled";

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
            <Header className={classAction}>
                <Anchor href="/">
                    <Strong>Hotel</Strong>
                    <Span>Dilivher</Span>
                </Anchor>
                <Nav>
                    <Button
                        type="button"
                        id="menuButton"
                        className={click ? styles.noStyleButtonAfter : styles.noStyleButton}
                        onClick={() => setClick(!click)}
                    >
                        {click ? null : "Menu"}
                    </Button>
                </Nav>
            </Header>
            <MenuNav display={click} setDisplay={setClick} />
        </>
    );
};

export default Navigation;

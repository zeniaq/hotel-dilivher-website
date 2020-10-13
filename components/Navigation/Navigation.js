import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import MenuNav from "../MenuNav";
import styles from "../../styles/Home.module.css";

const Navigation = ({ classStyle, strongText, spanText }) => {
    const [click, setClick] = useState(false);
    const classReserve = `${styles.alt} ${classStyle} ${styles.header}`;
    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = click ? "hidden" : "visible";
    }, [click]);

    return (
        <>
            <header className={classReserve}>
                <a className={styles.logo} href="/">
                    <strong>{strongText}</strong>
                    <span>{spanText}</span>
                </a>
                <nav>
                    <a onClick={() => setClick(!click)}>Menu</a>
                </nav>
            </header>
            {click ? <MenuNav /> : null}
        </>
    );
};

Navigation.propTypes = {
    classStyle: PropTypes.string,
    strongText: PropTypes.string,
    spanText: PropTypes.string,
};

Navigation.defaultProps = {
    classStyle: "",
    strongText: "",
    spanText: "",
};

export default Navigation;

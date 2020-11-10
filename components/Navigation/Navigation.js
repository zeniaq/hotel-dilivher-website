import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MenuNav from "../MenuNav";
import { Header, Nav, Span, Strong, Anchor, Button } from "./styled";

const Navigation = ({ typeMenu }) => {
    const [click, setClick] = useState(false);
    const [menuStyle, setMenuStyle] = useState("principal");

    function handleAnimation() {
        // eslint-disable-next-line no-undef
        if (document.documentElement.scrollTop > 500) {
            setMenuStyle("secundary");
        }
        // eslint-disable-next-line no-undef
        if (document.documentElement.scrollTop < 500) {
            setMenuStyle("principal");
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
            <Header menuStyle={menuStyle}>
                <Anchor href="/">
                    <Strong>Hotel</Strong>
                    <Span>Dilivher</Span>
                </Anchor>
                <Nav>
                    <Button
                        type="button"
                        id="menuButton"
                        buttonStyle={click ? "secundary" : "principal"}
                        onClick={() => setClick(!click)}
                    >
                        {click ? null : "Menu"}
                    </Button>
                </Nav>
            </Header>
            <MenuNav display={click} setDisplay={setClick} typeMenu={typeMenu} />
        </>
    );
};
Navigation.propTypes = {
    typeMenu: PropTypes.string,
};
Navigation.defaultProps = {
    typeMenu: "",
};

export default Navigation;

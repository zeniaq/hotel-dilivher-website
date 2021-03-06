import styled from "styled-components";

export const Nav = styled.nav`
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: rgba(36, 41, 67, 0.98);
    top: 0;
    text-decoration: none;
    animation-name: menuAnimation;
    animation-duration: 1.5s;
    animation-direction: unset;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;

    @keyframes menuAnimation {
        0% {
            width: 0px;
            height: 0px;
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
export const UlLinks = styled.ul`
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
    text-decoration: none;
    display: block;
    border: 0;
    li {
        list-style: none;
        align-items: center;
        padding: 0;
        font-size: 0.8em;
        font-weight: 600;
        letter-spacing: 0.25em;
        margin-bottom: 0;
        text-transform: uppercase;
        line-height: 4;
        text-decoration: none;
        display: block;
        border: 0;
    }
    li > a {
        text-decoration: none;
    }
`;
export const UlForm = styled.ul`
    display: flex;
    cursor: default;
    list-style: none;
    margin-left: -1em;
    padding-left: 0;
    flex-direction: column;
    margin-left: 0;
    li {
        padding: 1.3em 0 0 0;
        vertical-align: middle;
    }
`;

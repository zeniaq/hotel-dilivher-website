import styled from "styled-components";

export const Section = styled.section`
    align-items: center;
    display: flex;
    padding: 6em 0 2em 0;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 0 !important;
    cursor: default;
    margin-bottom: -3.25em;
    max-height: 32em;
    min-height: 22em;
    position: relative;
    top: -3.25em;
    height: 75vh;
    min-height: 30em;
    max-height: 50em;

    :before {
        transition: opacity 2.5s ease;
        transition-delay: 0.75s;
        pointer-events: none;
        background-color: #242943;
        content: "";
        display: block;
        height: 100%;
        left: 0;
        opacity: 0.25;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    > * {
        padding: 4em 0 2em 0;
        margin: 0 auto;
        max-width: 65em;
        width: calc(100% - 6em);
        animation-duration: 3s;
        animation-name: entry;
    }
    @keyframes entry {
        from {
            color: transparent;
            transform: translate(-5%, 0);
        }
        to {
            transform: translate(0, 0);
        }
    }

    @media screen and (max-width: 1280px) {
        background-attachment: scroll;
    }

    @media screen and (max-width: 736px) {
        padding: 5em 0 1em 0;
        height: auto;
        max-height: none;
        min-height: 0;
    }

    @media screen and (max-width: 480px) {
        padding: 7em 0 2em 0;
    }
`;
export const Div1 = styled.div`
    transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease,
        -webkit-filter 0.5s ease;
    padding: 0 !important;
    position: relative;
    z-index: 2;
`;
export const Div2 = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 2em 0;

    :last-child {
        margin-right: 0;
    }

    > * {
        margin-right: 1.5em;
        margin-bottom: 0;
    }

    @media screen and (max-width: 736px) {
        > * {
            margin-right: 0;
            margin-bottom: 2em;
        }
    }

    @media screen and (max-width: 736px) {
        display: block;
    }
`;
export const Header = styled.header`
    width: max-content;
    margin-bottom: 2em;
    :first-child {
        margin-bottom: 0;
        width: calc(100% + 0.5em);
        width: auto;
    }
    :first-child:after {
        content: "";
        background-color: #ffffff;
        display: block;
        height: 2px;
        margin: 0.325em 0 0.5em 0;
        width: 100%;
        max-width: 100%;
    }
`;
export const H1 = styled.h1`
    font-size: 3.25em;
    color: #ffffff;
    font-weight: 600;
    line-height: 1.65;

    a {
        color: inherit;
        border-bottom: 0;
    }

    @media screen and (max-width: 736px) {
        font-size: 2em;
    }
`;
export const P = styled.p`
    font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin: 3em 2em 2em 0;

    @media screen and (max-width: 480px) {
        br {
            display: none;
        }
    }
`;
export const Ul = styled.ul`
    li {
        padding: 0 0 0 1em;
        vertical-align: middle;
    }

    display: flex;
    cursor: default;
    list-style: none;
    margin-left: -1em;
    padding-left: 0;

    a {
        background-color: transparent;
        border: 0;
        border-radius: 0;
        box-shadow: inset 0 0 0 2px #ffffff;
        color: #ffffff;
        cursor: pointer;
        display: inline-block;
        font-size: 0.8em;
        font-weight: 600;
        height: 3.5em;
        letter-spacing: 0.25em;
        line-height: 3.5em;
        padding: 0 1.75em;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
        padding-right: 4.5em;
        position: relative;
    }
    a:hover {
        box-shadow: inset 0 0 0 2px #9bf1ff;
        color: #9bf1ff;
    }

    a:before,
    a:after {
        background-position: center right;
        background-repeat: no-repeat;
        background-size: 36px 24px;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        right: 1.5em;
        top: 0;
        width: 36px;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='36px' height='24px' viewBox='0 0 36 24' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 2px%3B %7D%3C/style%3E%3Cline x1='0' y1='12' x2='34' y2='12' /%3E%3Cline x1='25' y1='4' x2='34' y2='12.5' /%3E%3Cline x1='25' y1='20' x2='34' y2='11.5' /%3E%3C/svg%3E");
    }

    @media screen and (max-width: 1280px) {
        padding-right: 5em;
    }
`;

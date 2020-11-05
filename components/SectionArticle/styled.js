import styled from "styled-components";

export const Article = styled.article`
    align-items: center;
    display: flex;
    transition: transform 0.25s ease, opacity 0.25s ease, filter 1s ease, -webkit-filter 1s ease;
    padding: 4em 4em 2em 4em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: default;
    height: 40vh;
    max-height: 40em;
    min-height: 23em;
    overflow: hidden;
    position: relative;
    width: 40%;

    :before {
        transition: opacity 0.5s ease;
        bottom: 0;
        content: "";
        display: block;
        height: 100%;
        left: 0;
        opacity: 0.85;
        position: absolute;
        width: 100%;
        z-index: 2;
    }

    :after {
        background-color: rgba(36, 41, 67, 0.25);
        content: "";
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    :hover:before {
        opacity: 0;
    }

    :nth-child(4n - 1),
    :nth-child(4n - 2) {
        width: 60%;
    }

    :nth-child(6n - 5):before {
        background-color: #6fc3df;
    }

    :nth-child(6n - 4):before {
        background-color: #8d82c4;
    }

    :nth-child(6n - 3):before {
        background-color: #ec8d81;
    }

    :nth-child(6n - 2):before {
        background-color: #e7b788;
    }

    :nth-child(6n - 1):before {
        background-color: #8ea9e8;
    }

    :nth-child(6n):before {
        background-color: #87c5a4;
    }

    @media screen and (max-width: 1280px) {
        padding: 4em 3em 2em 3em;
        height: 30vh;
        max-height: 30em;
        min-height: 20em;
    }

    @media screen and (max-width: 980px) {
        width: 50% !important;
    }

    @media screen and (max-width: 736px) {
        padding: 3em 1.5em 1em 1.5em;
        height: 16em;
        max-height: none;
        min-height: 0;
    }

    @media screen and (max-width: 480px) {
        height: 20em;
        width: 100% !important;
    }
`;
export const Header = styled.header`
    width: -moz-max-content;
    width: -webkit-max-content;
    width: -ms-max-content;
    width: max-content;
    margin-bottom: 2em;

    position: relative;
    z-index: 3;

    > :first-child {
        margin-bottom: 0;
        width: calc(100% + 0.5em);
    }

    :first-child:after {
        content: "";
        background-color: #ffffff;
        display: block;
        height: 2px;
        margin: 0.325em 0 0.5em 0;
        width: 100%;
    }
`;
export const H3 = styled.h3`
    font-size: 1.75em;
    @media screen and (max-width: 736px) {
        font-size: 1.5em;
    }
    color: #ffffff;
    font-weight: 600;
    line-height: 1.65;
    margin: 0 0 1em 0;

    a {
        color: inherit;
        border-bottom: 0;
    }

    font-size: 1.35em;

    @media screen and (max-width: 736px) {
        font-size: 1.25em;
    }
`;
export const Anchor = styled.a`
    color: inherit !important;
`;
export const P = styled.p`
    font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 0.25em;
    margin-bottom: 0;
    text-transform: uppercase;
    br {
        display: none;
    }
`;

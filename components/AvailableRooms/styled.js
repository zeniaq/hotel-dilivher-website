import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    background-color: #2e3450;
    border-top: 0 !important;
    * {
        border-top: 0 !important;
    }

    :nth-child(2n) {
        flex-direction: row-reverse;
        background-color: #333856;
    }

    :nth-child(2n) > .content {
        align-items: flex-end;
    }
    @media screen and (max-width: 980px) {
        display: block;
    }
`;
export const Div1 = styled.div`
    padding: 4em 0 2em 0;
    margin: 0 auto;
    max-width: 65em;
    width: calc(100% - 6em);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 3em 0.1em 3em;
    width: 70%;

    @media screen and (max-width: 1280px) {
        width: 55%;
    }
    @media screen and (max-width: 980px) {
        padding: 4em 3em 2em 3em;
        width: 100%;
    }

    @media screen and (max-width: 736px) {
        padding: 3em 1.5em 1em 1.5em;
    }
`;
export const Div2 = styled.div`
    margin: 0 auto;
    max-width: 100%;
    width: 65em;
`;
export const Header = styled.header``;
export const H3 = styled.h3`
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
export const Ul = styled.ul`
    display: flex;
    cursor: default;
    list-style: none;
    margin-left: -1em;
    padding-left: 0;

    li {
        padding: 0 0 0 1em;
        vertical-align: middle;
    }

    a {
        background-color: transparent;
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
    }

    a:hover {
        box-shadow: inset 0 0 0 2px #9bf1ff;
        color: #9bf1ff;
    }
`;
export const Img = styled.img`
    border-radius: 0;
    display: block;
    width: 100%;
    height: 100%;
`;
export const P = styled.p`
    margin: 0 0 2em 0;
`;
export const Anchor = styled.a`
    transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    color: inherit;
    text-decoration: none;
    :hover {
        border-bottom-color: transparent;
        color: #9bf1ff !important;
    }
    :active {
        color: #53e3fb !important;
    }
    background-position: center center;
    background-size: cover;
    border-radius: 0;
    display: block;
    position: relative;
    width: 30%;

    :before {
        background: rgba(36, 41, 67, 0.9);
        content: "";
        display: block;
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    @media screen and (max-width: 1680px) {
        width: 40%;
    }

    @media screen and (max-width: 1280px) {
        width: 45%;
    }

    @media screen and (max-width: 980px) {
        width: 100%;
    }
`;

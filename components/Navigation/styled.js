import styled from "styled-components";

export const Header = styled.header`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    background-color: #2a2f4a;
    box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.15);
    cursor: default;
    font-weight: 600;
    height: 3.25em;
    left: 0;
    letter-spacing: 0.25em;
    line-height: 3.25em;
    margin: 0;
    position: fixed;
    text-transform: uppercase;
    top: 0;
    width: 100%;
    z-index: 10000;
`;
export const Anchor = styled.a`
    border: 0;
    display: inline-block;
    font-size: 0.8em;
    height: inherit;
    line-height: inherit;
    padding: 0 1.5em;
    ::hover strong {
        background-color: #9bf1ff;
    }

    ::active strong {
        background-color: #53e3fb;
    }
`;
export const Strong = styled.strong`
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: #ffffff;
    color: #242943;
    display: inline-block;
    line-height: 1.65em;
    margin-right: 0.325em;
    padding: 0 0.125em 0 0.375em;
`;
export const Span = styled.span``;
export const Nav = styled.nav`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-justify-content: -moz-flex-end;
    -webkit-justify-content: -webkit-flex-end;
    -ms-justify-content: -ms-flex-end;
    justify-content: flex-end;
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    height: inherit;
    line-height: inherit;
`;
export const Button = styled.button``;

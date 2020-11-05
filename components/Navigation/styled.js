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
    ${(props) =>
        props.menuStyle === "principal"
            ? `
    transition: opacity 2.5s ease;
    transition-delay: 0.75s;
    animation: none;
    background-color: transparent;
    box-shadow: none;
    position: absolute;`
            : `
    animation: reveal-header 0.35s ease;        
            `};
            > *{
            transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
            color: inherit;
            text-decoration: none;
            }

            >:hover {
                border-bottom-color: transparent;
                color: #9bf1ff !important;
            }
            
            >:active {
                color: #53e3fb !important;
            }

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
export const Button = styled.button`
    appearance: none;
    box-shadow: none;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
        color 0.2s ease-in-out;
    background-color: transparent;
    color: #ffffff;
    display: block;
    height: 15;
    cursor: pointer;
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
    :hover {
        box-shadow: inset 0 0 0 2px #9bf1ff;
        color: #9bf1ff;
    }
    ${(props) =>
        props.buttonStyle === "principal"
            ? `
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %23ffffff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
        background-position: right;
        background-repeat: no-repeat;
        background-size: 24px 32px;
        position: absolute;
        right: 1.5em;
        top: 0;
        width: 24px;
        padding-right: 6em;
        padding-left: 0;
        padding-top: 0;
        padding-bottom: 0;
        border: none !important;
        outline: none !important;

        :hover {
            box-shadow: none;
            transition: none;
        }`
            : `
        box-shadow: none;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 2%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='20' y2='20' /%3E%3Cline x1='20' y1='0' x2='0' y2='20' /%3E%3C/svg%3E");
        background-position: right;
        background-repeat: no-repeat;
        background-size: 24px 32px;
        content: "";
        display: block;
        height: 15;
        position: absolute;
        right: 1.5em;
        top: 0;
        width: 24px;
        padding: 0;
        border: none !important;
        outline: none !important;
        
        :hover {
            box-shadow: none;
            transition: none;
        }    
    `};
`;

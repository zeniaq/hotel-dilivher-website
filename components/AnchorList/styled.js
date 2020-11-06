import styled from "styled-components";

export const Li = styled.li`
    a.icon.alt:before {
        transition: background-color 0.2s ease-in-out;
    }

    a.icon.alt:hover:before {
        background-color: #6fc3df;
    }

    a.icon.alt:active:before {
        background-color: #37a6cb;
    }
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
    ${(props) =>
        props.anchorStyle
            ? `
    appearance: none;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
        color 0.2s ease-in-out;
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
    width: 100%;
    `
            : null};

    ${(props) =>
        props.anchorStyle === "style1"
            ? `
    background-color: #ffffff;
    box-shadow: none;
    color: #242943;
    :hover,
    :active{
        background-color: #9bf1ff;
        color: #242943 !important;
    }`
            : null};
`;

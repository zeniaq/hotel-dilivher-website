import styled from "styled-components";

export const Li = styled.li``;
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

    border-bottom: dotted 1px;
    img:hover {
        background-color: #9bf1ff;
    }
    ${(props) =>
        props.typeAnchor
            ? `background-color: #ffffff;
    border-radius: 100%;
    color: #242943;
    display: inline-block;
    height: 2em;
    line-height: 2em;
    text-align: center;
    width: 2em;
    background-color: white;
    transition: background-color 0.1s linear 0.1s;`
            : null}
`;
export const Img = styled.img`
    font-size: 1em;
    padding: 0.5rem;
    border-radius: 100%;
    background-color: transparent;
    width: 2em;
    height: 2em;
    border: 0;
`;
export const Section = styled.section``;
export const Div = styled.div`
    margin: 0 0 2em 0;
    padding-left: 3.25em;
    position: relative;
`;
export const H3 = styled.h3`
    margin: 0 0 0.5em 0;
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
export const Span = styled.span`
    background-color: #ffffff;
    border-radius: 100%;
    color: #242943;
    display: inline-block;
    height: 2em;
    line-height: 2em;
    text-align: center;
    width: 2em;
    background-color: white;
    transition: background-color 0.1s linear 0.1s;
    left: 0;
    position: absolute;
    top: 0;
`;

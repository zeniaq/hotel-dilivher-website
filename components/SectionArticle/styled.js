import styled from "styled-components";

export const Article = styled.article``;
export const Header = styled.header`
    width: -moz-max-content;
    width: -webkit-max-content;
    width: -ms-max-content;
    width: max-content;
    margin-bottom: 2em;

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
export const H3 = styled.h3``;
export const Anchor = styled.a``;
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

import styled from "styled-components";

export const Section = styled.section`
    padding: 4em 0 2em 0;
    margin: 0 auto;
    max-width: 65em;
    width: calc(100% - 6em);
`;
export const Div = styled.div``;
export const Header = styled.header`
    width: -moz-max-content;
    width: -webkit-max-content;
    width: -ms-max-content;
    width: max-content;
    margin-bottom: 2em;
    :first-child {
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
export const H1 = styled.h1``;
export const Span = styled.span`
    border: 0;
    display: inline-block;
    position: relative;
    display: block;
    margin: 2.5em 0;
    width: 100%;
`;
export const Img = styled.img`
    width: 100%;
`;
export const P = styled.p``;

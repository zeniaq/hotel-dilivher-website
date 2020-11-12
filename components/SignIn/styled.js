import styled from "styled-components";

export const Section = styled.section`
    > * {
        padding: 1em 0 2em 0;
        margin: 0 auto;
        max-width: 65em;
        width: calc(100% - 40em);
    }
    border-bottom: solid 1px rgba(212, 212, 255, 0.1);
    overflow-x: hidden;
`;
export const Div = styled.div`
    align-items: center;
    justify-content: center;
`;
export const Img = styled.img`
    width: 120px;
`;
export const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    padding: 1em 8em;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    background-color: transparent;
    color: #242943;
`;
export const Div2 = styled.div``;
export const Form = styled.form``;

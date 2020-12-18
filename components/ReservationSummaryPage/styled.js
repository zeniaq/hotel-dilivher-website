import styled from "styled-components";

export const DivTable = styled.div``;
export const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;
export const DivH1 = styled.div`
    background-color: #242943;
    margin-bottom: 1em;
    border-radius: 3px;
    padding: 0.8em;
`;
export const DivColor = styled.div`
    background: rgba(36, 41, 67, 0.8);
    border-radius: 3px;
    padding: 1em;
`;
export const H3 = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`;
export const Button = styled.button`
    box-shadow: none;
    border: 0;
    display: block;
    margin: auto;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8em;
    height: 2.5em;
    font-weight: 600;
    letter-spacing: 0.25em;
    line-height: 2.5em;
    padding: 0 1em;
    text-align: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    margin-top: 10px;
    background-color: #242943;
    box-shadow: inset 0 0 0 2px #ffffff;
    color: #ffffff;
    :hover,
    :active {
        background-color: #9bf1ff;
        color: #242943 !important;
    }
`;

export const DivContent = styled.div`
    align-items: center;
    justify-content: center;
    padding: 1em;
    margin: auto;
    max-width: 100em;
    width: calc(100% - 20em);
    background: rgba(255, 255, 224, 0.1);
    border-radius: 3px;
    overflow: hidden;

    @media screen and (max-width: 980px) {
        width: calc(95%);
    }
`;
export const Section = styled.section``;
export const A = styled.a`
    text-decoration: none;
`;

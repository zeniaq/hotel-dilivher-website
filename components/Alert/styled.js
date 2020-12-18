import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    :target {
        visibility: visible;
        opacity: 1;
    }
`;
export const Div = styled.div`
    color: #000000;
    box-shadow: 0 0 5px #ccc;
    background: #fff;
    text-align: center;
    font-weight: bold;
    display: block;
    padding: 1em;
    border-radius: 3px;
`;
export const DivText = styled.div`
    display: block;
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
`;
export const DivActions = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
`;
export const Button = styled.a`
    box-shadow: none;
    border: 0;
    display: block;
    margin: 0px 10px;
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
    background-color: #242943;
    box-shadow: inset 0 0 0 2px #ffffff;
    color: #ffffff;
    :hover,
    :active {
        background-color: #9bf1ff;
        color: #242943 !important;
    }
`;

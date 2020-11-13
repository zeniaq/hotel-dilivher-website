import styled from "styled-components";

export const DivContainer = styled.div`
    width: 300px;
    border-color: rgba(20, 17, 161, 0.4);
    border-right: solid;
    padding-bottom: 1em;
    padding-top: 1em;
    @media screen and (max-width: 736px) {
        display: none;
    }
`;

export const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;
    text-transform: uppercase;
`;

export const Nav = styled.nav`
    min-width: 300px;
    left: 0px;
    width: 300px;
    height: 100%;
    list-style: none;
`;

export const Div = styled.div`
    padding-left: 450px;
`;

export const DivClass = styled.div`
    border-bottom: solid;
    border-color: #000;
`;

export const Ul = styled.ul`
    padding: 0;
    margin-left: 1em;
    margin-right: 1em;
    text-decoration: none;
    display: block;
    border: 0;
    li {
        list-style: none;
        align-items: center;
        padding: 10px;
        font-size: 0.8em;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-decoration: none;
        cursor: pointer;
        background-color: #dfe6ed;
        margin-bottom: 10px;
        color: #242943;
        border-radius: 10px;
        width: 100%;
    }
`;
export const DivMenu = styled.div`
    justify-content: center;
    display: none;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 736px) {
        display: flex;
    }
`;
export const Button = styled.button`
    list-style: none;
    align-items: center;
    padding: 10px;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-decoration: none;
    cursor: pointer;
    background-color: #dfe6ed;
    margin-bottom: 10px;
    color: #242943;
    border-radius: 10px;
    width: 100%;
`;

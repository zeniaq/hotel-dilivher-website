import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
`;
export const DivSecundary = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
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
    bottom: 10em;
    padding-bottom: 3.25em;
    @media screen and (max-width: 736px) {
        display: flex;
    }
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    background-color: transparent;
    line-height: 3em;
    color: #ffffff;
    display: block;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: 600;
    height: 3.5em;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    white-space: nowrap;
    :hover {
        box-shadow: inset 0 0 0 2px #9bf1ff;
        color: #9bf1ff;
    }
    ${(props) =>
        props.buttonStyle === "principal"
            ? `
    position: absolute;
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
    position: absolute;
    right: 1.5em;
    top: 0;
    padding: 0;
    border: none !important;
    outline: none !important;
    :hover {
        box-shadow: none;
        transition: none;
    }    
`};
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2a2f4a;
    box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.15);
    height: 2.5em;
    margin-top: 3.25em;
    position: absolute;
    top: 0;
    bottom: 10em;
    width: 100%;
    z-index: 2;
    ${(props) => (props.click === true ? `margin-top:0; z-index: 99999;` : null)}
`;

export const Img = styled.img`
    width: 24px;
    height: 32px;
    position: absolute;
    ${(props) => (props.click ? `right: 0;` : null)}
`;

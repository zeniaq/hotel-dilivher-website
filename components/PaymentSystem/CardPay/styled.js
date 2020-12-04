import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`;
export const Div1 = styled.div`
    padding: 1em;
`;
export const Span = styled.span`
    display: block;
    font-size: 15px;
`;
export const Date = styled.div`
    display: flex;
    font-weight: 1000;
    font-size: 17pt;
`;
export const Join = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
export const Div = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const DivContainer = styled.div`
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background-color: rgb(57, 61, 85);
    @media screen and (max-width: 736px) {
        display: block;
        width: 95%;
    }
`;
export const DivInfo = styled.div`
    justify-content: center;
    align-items: center;
    flex-flow: row;
    padding: 1em;
`;
export const Img = styled.img`
    width: 50px;
    height: 50px;
    margin: auto;
    display: block;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(110deg) brightness(106%) contrast(102%);
`;
export const DivPay = styled.div`
    display: block;
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #dfe6ed;
    padding: 1em;
`;

export const Label = styled.label`
    color: #242943;
    display: block;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
export const Total = styled.p`
    font-size: 30px;
    width: 100%;
    text-align: center;
    font-weight: bold;
`;
export const P = styled.p`
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    text-align: center;
    @media screen and (max-width: 736px) {
        margin-top: 0em;
    }
`;
export const Anchor = styled.a`
    height: 20px;
    margin-left: 10px;
    img {
        filter: drop-shadow(0 0 5px #fff);
    }
`;
export const Input = styled.input`
    color: #ffffff;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-size: 17pt;
    font-weight: 300;
    letter-spacing: 0.05em;
    line-height: 1.65;
    height: 30pt;
    background-color: #2b304a;
    border: none;
    display: block;
    outline: 0;
    padding: 0 0.75em;
    text-decoration: none;

    ${(props) => (props.id === "name" || props.id === "card" ? `width: 100%;` : ``)}
    ${(props) => (props.id === "month" ? `margin-right:5px;` : ``)}
    ${(props) => (props.id === "year" ? `margin-left:5px;margin-right:10px;` : ``)}
    :invalid {
        box-shadow: none;
    }
    :focus {
        border-color: #9bf1ff;
        box-shadow: 0 0 0 2px #9bf1ff;
    }

    @media screen and (max-width: 1680px) {
        font-size: 14pt;
    }
    @media screen and (max-width: 1280px) {
        font-size: 12pt;
    }
    @media screen and (max-width: 360px) {
        font-size: 11pt;
    }
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

    background-color: #242943;
    box-shadow: inset 0 0 0 2px #ffffff;
    color: #ffffff;
    :hover,
    :active {
        background-color: #9bf1ff;
        color: #242943 !important;
    }
`;
export const Title = styled.h1`
    color: #242943;
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 10px;
`;

import styled from "styled-components";

export const P = styled.p`
    color: #242943;
    display: flex;
    width: 100%;
    @media screen and (max-width: 736px) {
        text-align: center;
        justify-content: center;
        width: 100%;
    }
    ${(props) =>
        props.typeCard === "tab"
            ? `text-align: center;
            justify-content: center;
            width: 100%;`
            : null}
`;
export const Strong = styled.strong`
    font-weight: bold;
    margin-right: 5px;
`;

export const Li = styled.li`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    [data-bubble]:after {
        content: attr(data-bubble);
        position: absolute;
        top: -1em;
        right: 0em;
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5em;
        text-align: center;
        color: #fff;
        border-radius: 3px;
        background-color: red;
        font-weight: bold;
        z-index: 9999999;
    }
`;

export const DivCard = styled.div`
    flex-flow: row;
    background-color: #dfe6ed;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 3px;
    overflow: hidden;
    text-decoration: none;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 736px) {
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    ${(props) =>
        props.typeCard === "tab"
            ? `display: block;
            justify-content: center;
            align-items: center;
            margin-bottom:0rem;`
            : null}
`;

export const Figure = styled.figure`
    position: relative;
    width: 150px;
    height: 150px;
    margin: 1.5%;
    border-radius: 3px;
    @media screen and (max-width: 736px) {
        margin: 3%;
        width: 94%;
    }
    ${(props) =>
        props.typeCard === "tab"
            ? `margin: 3%;
            width: 94%;`
            : null}
`;

export const Img = styled.img`
    position: absolute;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
    border-radius: 3px;
    &:hover {
        transform: scale(1.1);
    }
`;

export const DivText = styled.div`
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 736px) {
        display: block;
        padding: 1em;
    }
    ${(props) =>
        props.typeCard === "tab"
            ? ` display: block;
            padding: 1em;`
            : null}
`;

export const DivInfo = styled.div`
    margin-right: 15px;
    @media screen and (max-width: 736px) {
        margin: 0;
    }
    ${(props) => (props.typeCard === "tab" ? `margin: 0;` : null)}
`;
export const DivButton = styled.div`
    width: 40px;
    margin-right: 15px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 736px) {
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
    }
`;
export const ButtonCount = styled.button`
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 1.5em;
    color: white;
    :hover {
        color: black;
    }
    :disabled {
        background-color: #999;
    }
    :disabled:hover {
        background-color: #999;
        color: white;
        cursor: default;
    }
    ${(props) =>
        props.type === "+"
            ? `
        border-radius: 0em 0em 3px 3px;
        background-color: green;
        :hover {
            background-color: #87c5a4;
        }
        @media screen and (max-width: 736px) {
            border-radius: 0em 3px 3px 0em;
        }
    `
            : `
        border-radius: 3px 3px 0em 0em;
        background-color: red;
        :hover {
            background-color: #ec8d81;
        }
        @media screen and (max-width: 736px) {
            border-radius: 3px 0em 0em 3px;
        }
            `}
`;

export const Counter = styled.div`
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    background-color: red;
    font-weight: bold;
    z-index: 1;
    cursor: default;
    ${(props) => (props.children === 0 ? `display:none;` : null)}
`;
export const DivNotification = styled.div`
    position: relative;
    @media screen and (max-width: 736px) {
        width: 90%;
        justify-content: center;
        align-items: center;
        ${(props) => (props.typeCard === "tab" ? `width:100%;` : null)}
    }
`;

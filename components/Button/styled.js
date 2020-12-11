/* eslint-disable no-nested-ternary */
import styled from "styled-components";

const Button = styled.button`
    width: 28px;
    height: 28px;
    cursor: pointer;
    font-size: 15px;
    color: white;
    margin-right: 10px;
    :hover {
        color: black;
    }
    border-radius: 3px;
    ${(props) =>
        props.typeButton === "confirm"
            ? `
    background-color: green;
    :hover {
        background-color: #87c5a4;
    }
`
            : `
    background-color: red;
    :hover {
        background-color: #ec8d81;
    }
        `}
`;

export default Button;

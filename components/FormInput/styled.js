import styled from "styled-components";

export const Div = styled.div``;
export const Select = styled.select`
    color: white;
    background-color: #2b304a;
    border: none;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
    :invalid {
        box-shadow: none;
    }
    :focus {
        border-color: #9bf1ff;
        box-shadow: 0 0 0 2px #9bf1ff;
    }
    height: 40px;
`;
export const Label = styled.label`
    color: #ffffff;
    display: block;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 0.25em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
    ${(props) =>
        props.typeForm === "app"
            ? `
        color:#241943;
        margin-left:1em;
        margin-right:1em;
        @media screen and (max-width: 736px) {
            font-size: 11pt;
        }
        input{
            height: 40px;
            text-align:center;
        }
    `
            : null}
`;
export const Input = styled.input`
    ${(props) =>
        props.type !== "reset"
            ? `
        color: #ffffff;
        font-family: "Source Sans Pro", Helvetica, sans-serif;
        font-size: 17pt;
        font-weight: 300;
        letter-spacing: 0.025em;
        line-height: 1.65;
    
        @media screen and (max-width: 1680px) {
            font-size: 14pt;
        }
        @media screen and (max-width: 1280px) {
            font-size: 12pt;
        }
        @media screen and (max-width: 360px) {
            font-size: 11pt;
        }`
            : null}

    ${(props) =>
        props.type === "text" ||
        props.type === "email" ||
        props.type === "tel" ||
        props.type === "password" ||
        props.type === "date" ||
        props.type === "number"
            ? `
            background-color: #2b304a;
            border: none;
            display: block;
            outline: 0;
            padding: 0 1em;
            text-decoration: none;
            width: 100%;
            :invalid {
                box-shadow: none;
            }
            :focus {
                border-color: #9bf1ff;
                box-shadow: 0 0 0 2px #9bf1ff;
            }
            height: 2.75em;
    `
            : null}

            ${(props) =>
        props.type === "radio"
            ? `
                appearance: none;
                float: left;
                margin-right: -2em;
                opacity: 0;
                width: 1em;
                z-index: -1;
                text-decoration: none;
                color: #ffffff;
                cursor: pointer;
                display: inline-block;
                font-weight: 300;
                padding-left: 2.65em;
                padding-right: 0.75em;
                position: relative;
                
                :before {
                    display: inline-block;
                    font-style: normal;
                    font-variant: normal;
                    text-rendering: auto;
                    line-height: 1;
                    text-transform: none !important;
                    font-family: 'Font Awesome 5 Free';
                    font-weight: 900;
                    background: rgba(212, 212, 255, 0.035);
                    content: '';
                    display: inline-block;
                    font-size: 0.8em;
                    height: 2.0625em;
                    left: 0;
                    letter-spacing: 0;
                    line-height: 2.0625em;
                    position: absolute;
                    text-align: center;
                    top: 0;
                    width: 2.0625em;
                    border-radius: 100%;
                }
                :checked  {
                    background: #ffffff;
                    border-color: #9bf1ff;
                    content: '\f00c';
                    color: #242943;
                }
                :focus {
                    box-shadow: 0 0 0 2px #9bf1ff;
                }
                        
        `
            : null};
    ${(props) =>
        props.type === "reset"
            ? `
            appearance: none;
            transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
                color 0.2s ease-in-out;
            background-color: transparent;
            border: 0;
            border-radius: 0;
            box-shadow: inset 0 0 0 2px #ffffff;
            color: #ffffff;
            cursor: pointer;
            display: inline-block;
            font-size: 0.8em;
            font-weight: 600;
            height: 3.5em;
            letter-spacing: 0.25em;
            line-height: 3.5em;
            padding: 0 1.75em;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            white-space: nowrap;
            :active,
            :hover {
                box-shadow: inset 0 0 0 2px #9bf1ff;
                color: #9bf1ff;
            }
    `
            : null};
`;
export const TextArea = styled.textarea`
    resize: none;
    appearance: none;
    background: rgba(212, 212, 255, 0.035);
    border: none;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0.75em 1em;
    text-decoration: none;
    width: 100%;
    font-size: 17pt;
    font-weight: 300;
    letter-spacing: 0.025em;
    line-height: 1.65;
    font-family: "Source Sans Pro", Helvetica, sans-serif;

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
export const Ul = styled.ul`
    display: flex;
    cursor: default;
    list-style: none;
    margin-left: -1em;
    padding-left: 0;
    li {
        padding: 0 0 0 1em;
        vertical-align: middle;
    }
`;
export const Li = styled.li``;
export const Button = styled.button`
    background-color: #ffffff;
    box-shadow: none;
    color: #242943;
    :hover,
    :active {
        background-color: #9bf1ff;
        color: #242943 !important;
    }

    appearance: none;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
        color 0.2s ease-in-out;
    border: 0;
    border-radius: 5;
    cursor: pointer;
    font-size: 0.8em;
    height: 3.5em;
    font-weight: 600;
    letter-spacing: 0.25em;
    line-height: 3.5em;
    padding: 0 1em;
    text-align: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    ${(props) =>
        props.typeButton === "card"
            ? `
            appearance: none;
            background-color: #242943;
            box-shadow: inset 0 0 0 2px #ffffff;
            color: #ffffff;
            :active,
            :hover {
                color: #9bf1ff;
            }
    `
            : null}
`;

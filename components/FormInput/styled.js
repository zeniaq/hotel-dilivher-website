import styled from "styled-components";

export const Div = styled.div``;
export const Label = styled.label``;
export const Input = styled.input`
    ${(props) =>
        props.type === "text" || props.type === "email"
            ? `
            appearance: none;
            background: rgba(212, 212, 255, 0.035);
            border: none;
            border-radius: 0;
            color: inherit;
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
            : null};
    ${(props) =>
        props.type === "text"
            ? `

    `
            : null};
    ${(props) =>
        props.type === "email"
            ? `

    `
            : null};
    ${(props) => (props.type === "" ? `` : null)};
`;
export const TextArea = styled.textarea`
    resize: none;
    appearance: none;
    background: rgba(212, 212, 255, 0.035);
    border: none;
    border-radius: 0;
    color: inherit;
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
    padding: 0.75em 1em;
`;
export const Ul = styled.ul`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
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
    }
    :hover,
    :active {
        background-color: #9bf1ff;
        color: #242943 !important;
    }
`;

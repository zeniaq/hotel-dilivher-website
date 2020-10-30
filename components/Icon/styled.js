import styled from "styled-components";

export const Li = styled.li``;
export const Anchor = styled.a`
    :hover {
        background-color: ${(props) => (props.hoverStyle ? "#9bf1ff" : null)};
    }

    ${(props) =>
        props.href
            ? `
        border-bottom: dotted 1px; 
        img:hover{
            background-color:#9bf1ff;
        }`
            : null};

    ${(props) =>
        props.typeAnchor
            ? `background-color: #ffffff;
    border-radius: 100%;
    color: #242943;
    display: inline-block;
    height: 2em;
    line-height: 2em;
    text-align: center;
    width: 2em;
    background-color: white;
    transition: background-color 0.1s linear 0.1s;`
            : null}
`;
export const Img = styled.img`
    font-size: 1em;
    padding: 0.5rem;
    border-radius: 100%;
    background-color: transparent;
    width: 2em;
    height: 2em;
    border: 0;
`;
export const Section = styled.section``;
export const Div = styled.div`
    margin: 0 0 2em 0;
    padding-left: 3.25em;
    position: relative;

    .contact {
        left: 0;
        position: absolute;
        top: 0;
    }
`;
export const H3 = styled.h3`
    margin: 0 0 0.5em 0;
`;

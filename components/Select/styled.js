import styled from "styled-components";

export const Div1 = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const Option = styled.option``;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    background-color: white;
    border-radius: 0.5em;
    margin-bottom: 1em;
    @media screen and (max-width: 736px) {
        display: block;
        align-items: center;
        width: 90%;
    }
`;
export const P = styled.p`
    text-decoration: none;
    display: flex;
    justify-content: center;
`;

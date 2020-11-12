import styled from "styled-components";

export const Div1 = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Div2 = styled.div`
    display: flex;
    background-color: white;
    padding: 1em;
    border-radius: 0.5em;
    margin-right: 1em;
    @media screen and (max-width: 736px) {
        display: block;
        margin-bottom: 1em;
        margin-right: 0em;
    }
`;
export const Option = styled.option``;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    @media screen and (max-width: 736px) {
        display: block;
        align-items: center;
    }
`;

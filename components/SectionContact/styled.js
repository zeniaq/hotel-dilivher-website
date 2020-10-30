import styled from "styled-components";

export const Section1 = styled.section`
    > * {
        padding: 4em 0 2em 0;
        margin: 0 auto;
        max-width: 65em;
        width: calc(100% - 6em);
    }
    border-bottom: solid 1px rgba(212, 212, 255, 0.1);
    overflow-x: hidden;
`;
export const Section2 = styled.section``;
export const Section3 = styled.section``;
export const Div1 = styled.div`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    padding: 0 !important;
    > :nth-child(2n - 1) {
        padding: 4em 3em 2em 0;
        border-right: solid 1px rgba(212, 212, 255, 0.1);
        width: 60%;
    }

    > :nth-child(2n) {
        padding-left: 3em;
        width: 40%;
    }
`;
export const Div2 = styled.div``;
export const Form = styled.form``;
export const Input = styled.input``;

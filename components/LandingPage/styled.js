import styled from "styled-components";

export const Div1 = styled.div`
    transition: filter 0.35s ease, opacity 0.375s ease-out;
    padding-top: 3.25em;
`;
export const Div2 = styled.div`
    background-color: #2a2f4a;
    > * {
        border-top: solid 1px rgba(212, 212, 255, 0.1);
    }

    > *:first-child {
        border-top: 0;
    }
`;
export const Section = styled.section``;

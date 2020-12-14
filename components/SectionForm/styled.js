import styled from "styled-components";

export const Section = styled.section`
    > * {
        padding: 1em 0 2em 0;
        margin: 0 auto;
        max-width: 65em;
        width: calc(100% - 40em);
    }
    border-bottom: solid 1px rgba(212, 212, 255, 0.1);
    overflow-x: hidden;
`;
export const P = styled.p`
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding: 1em;

`;
export const Div = styled.div`
    align-items: center;
    justify-content: center;
    padding: 5 !important;

    flex-flow: row;
    background: rgba(255, 255, 224, 0.4);
        border-radius: 4px;
        overflow: hidden;
        text-decoration: none;
        margin-bottom: 1rem;
        padding: 1em;    
 
    @media screen and (max-width: 980px) {
        display: block;
    }
    @media screen and (max-width: 980px) {
        padding: 4em 2 2em 0;
        border-right: 0;
        width: 80%;
    }
`;
export const Img = styled.img`
    width: 120px;
    filter: invert(11%) sepia(26%) saturate(1361%) hue-rotate(193deg) brightness(94%)
        contrast(87%);

        @media screen and (max-width: 980px) {
            width: 100px;
        }
`;
export const Div2 = styled.div``;
export const Form = styled.form``;
export const Input = styled.input``;

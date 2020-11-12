import styled from "styled-components";

export const Section = styled.section`
> * {
    padding: 1em 0 2em 0;
    margin: 0 auto;
    max-width: 65em;
    width: calc(100% - 40em);
    align-items: center;
    justify-content: center;
}
border-bottom: solid 1px rgba(212, 212, 255, 0.1);
overflow-x: hidden;
`;
export const Div = styled.div`
align-items: center;
    justify-content: center;
    padding: 0 !important;
   
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
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(204deg) brightness(102%) contrast(110%);
  
`;
export const Label = styled.label``;
export const Div2 = styled.div``;
export const Form = styled.form``;
export const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    padding: 1em 12em;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    background-color: transparent;
    color: #242943;

    @media screen and (max-width: 980px) {
        padding: 1em 5em;
    }
    
`;

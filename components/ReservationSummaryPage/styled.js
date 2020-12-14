import styled from "styled-components";

export const DivTable = styled.div`
    padding: 2em;
    @media screen and (max-width: 980px) {
        display: block;
    }
`;
export const H1 = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  
    @media screen and (max-width: 980px) {
        display: block;
    }
`;
export const DivH1 = styled.div`
background-color: #242943;
    display: block;
    margin: 2px;
    margin-bottom: 35px;
    border-radius: 3px;
    padding: 2px 20px;

    @media screen and (max-width: 980px) {
        display: block;
        font-size: 1rem;
    }
`;
export const DivColor = styled.div`
background: rgba(36,41,67,0.8);
    display: block;
    margin: 2px;
    margin-bottom: 35px;
    border-radius: 3px;
    padding: 2px 20px;
   
`;
export const H3 = styled.h3`
font-size: 1rem;
font-weight: bold;
text-align: center;

@media screen and (max-width: 980px) {
    display: block;
}
`;
export const DivTable2 = styled.div`
padding: 4 30em;

@media screen and (max-width: 980px) {
    display: block;
    padding: 0 2em;
}
`;
export const Button = styled.button`
    box-shadow: none;
    border: 0;
    display: block;
    margin: auto;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8em;
    height: 2.5em;
    font-weight: 600;
    letter-spacing: 0.25em;
    line-height: 2.5em;
    padding: 0 1em;
    text-align: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;

    background-color: #242943;
    box-shadow: inset 0 0 0 2px #ffffff;
    color: #ffffff;
    :hover,
    :active {
        background-color: #9bf1ff;
        color: #242943 !important;
    }
`;

export const DivContent = styled.div`
    align-items: center;
    justify-content: center;
    padding: 5 !important;

    padding: 1em 0 2em 0;
    margin: 0 auto;
    max-width: 100em;
    width: calc(100% - 20em);

    flex-flow: row;
    background: rgba(255, 255, 224, 0.1);
        border-radius: 4px;
        overflow: hidden;
        text-decoration: none;
        margin-bottom: 5rem;
        padding: 1em;    
 
    @media screen and (max-width: 980px) {
        display: block;
        padding: 4em 2 2em 0;
        border-right: 0;
        
        width: calc(95% );
    }
    
    border-bottom: solid 1px rgba(212, 212, 255, 0.1);
    
`;
export const Section = styled.section``;


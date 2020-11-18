import styled from "styled-components";

export const Div = styled.div`
-webkit-overflow-scrolling: touch;
    overflow-x: auto;
    display: block;
`;
export const Table = styled.table`
margin: 2 0 2em 2;
margin-left: 5em;
width: 23%;

@media screen and (max-width: 980px) {
    margin-left: 1.8em;
    
}
`;
export const Thead = styled.thead`
    border-bottom: solid 2px rgba(212, 212, 255, 2);
`;
export const Tr = styled.tr`
    border: solid 1px rgba(212, 212, 255, 0.1);
    border-left: 0;
    border-right: 0;
    :nth-child(2n + 1) {
        background-color: rgba(212, 212, 255, 0.035);
    } 
`;
export const Tbody = styled.tbody`

`;
export const Td = styled.td`
color: #ffffff;
font-size: 0.9em;
font-weight: 300;
padding: 0 0.75em 0.75em 7em;
text-align: left;

@media screen and (max-width: 980px) {
    padding: 0 0.75em 0.75em 1.3em;
    
}
`;

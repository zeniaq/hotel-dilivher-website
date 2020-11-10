import styled from "styled-components";


export const Section = styled.section`
    
`;
export const Div = styled.div`
-webkit-overflow-scrolling: touch;
    overflow-x: auto;

    display: block;
`;
export const Table = styled.table`
    margin: 0 0 2em 0;
    width: 100%;

    
`;
export const Thead = styled.thead`
    border-bottom: solid 2px rgba(212, 212, 255, 0.1);
`;
export const Tr = styled.tr`
    border: solid 1px rgba(212, 212, 255, 0.1);
    border-left: 0;
    border-right: 0;

    :nth-child(2n + 1) {
        background-color: rgba(212, 212, 255, 0.035);
    }
`;
export const Th = styled.th`
            color: #ffffff;
			font-size: 0.9em;
			font-weight: 600;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
`;
export const Tbody = styled.tbody``;
export const Td = styled.td`
    padding: 0.75em 0.75em;
`;
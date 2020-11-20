import styled from "styled-components";

export const Div = styled.div`
    overflow-scrolling: touch;
    overflow-x: auto;
`;
export const TableTag = styled.table`
    margin: 0 0 2em 0;
    width: 100%;
    border-collapse: separate;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody`
    tr {
        border: solid 1px rgba(212, 212, 255, 0.1);
        border-left: 0;
        border-right: 0;
    }
    tr:first-child td {
        border-top-width: 1px;
    }
    tr:nth-child(2n + 1) {
        background-color: rgba(212, 212, 255, 0.035);
    }
`;
export const Tr = styled.tr``;
export const Th = styled.th`
    color: #ffffff;
    font-size: 0.9em;
    font-weight: 600;
    padding: 0 0.75em 0.75em 0.75em;
    text-align: left;
`;
export const Td = styled.td`
    padding: 0.75em 0.75em;
    border: solid 1px rgba(212, 212, 255, 0.1);
    border-left-width: 0;
    border-top-width: 0;
    :first-child {
        border-left-width: 1px;
    }
`;

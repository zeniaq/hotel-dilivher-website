import { Table, Tr, Tbody, Td } from "./styled";

const TablesColumns = ({ descriptionText }) => {
    return (
        <Table>
            <Tbody>
                <Tr>
                    <Td>Prueba 1</Td>
                </Tr>
                <Tr>
                    <Td>Prueba 2</Td>
                </Tr>
                <Tr>
                    <Td>Prueba 3</Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

export default TablesColumns;

import { Table, Thead, Tr, Th} from "./styled";

const TableRows = ({ titleText }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Apellido</Th>
                    <Th>Apellido 2</Th>
                </Tr>
            </Thead>
        </Table>
    );
};
export default TableRows;

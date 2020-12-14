import PropTypes from "prop-types";
import { TableTag, Div, Thead, Tbody, Tr, Th, Td } from "./styled";

const Table = ({ titles, rows }) => {
    return (
        <Div>
            <TableTag>
                <Thead>
                    <Tr>{titles}</Tr>
                </Thead>
                <Tbody>{rows}</Tbody>
            </TableTag>
        </Div>
    );
};
export const Row = ({ children }) => {
    return <Tr>{children}</Tr>;
};
export const TitleCell = ({ children }) => {
    return <Th>{children}</Th>;
};
export const ContentCell = ({ children }) => {
    return <Td>{children}</Td>;
};

Table.propTypes = {
    titles: PropTypes.node.isRequired,
    rows: PropTypes.string,
};
Table.defaultProps = {
    rows: "",
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
};

TitleCell.propTypes = {
    children: PropTypes.node.isRequired,
};

ContentCell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Table;

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
export const TitleCell = ({ data }) => {
    return <Th>{data}</Th>;
};
export const ContentCell = ({ data }) => {
    return <Td>{data}</Td>;
};

Table.propTypes = {
    titles: PropTypes.string,
    rows: PropTypes.string,
};
Table.defaultProps = {
    titles: "",
    rows: "",
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
};

TitleCell.propTypes = {
    data: PropTypes.string,
};
TitleCell.defaultProps = {
    data: "",
};

ContentCell.propTypes = {
    data: PropTypes.string,
};
ContentCell.defaultProps = {
    data: "",
};
export default Table;

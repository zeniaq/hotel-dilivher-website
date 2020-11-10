import PropTypes from "prop-types";
import { Section, Div, Table, Thead, Tr, Th, Tbody, Td } from "./styled";

const TablesPage = ({ titleText, descriptionText,  }) => {
    return(
        <Div>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Price</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{descriptionText}</Td>
                        <Td>{descriptionText}</Td>
                        <Td>{descriptionText}</Td> 
                    </Tr>
                </Tbody>
            </Table>
        </Div>
);
    };

TablesPage.propTypes = {
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
   };

TablesPage.defaultProps = {
    titleText: "",
    descriptionText: "",
};

export default TablesPage;

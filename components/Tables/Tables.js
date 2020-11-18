import PropTypes from "prop-types";
import TableRows from "../TableRows";
import TableColumns from "../TableColumns";

const Tables = ({ titleText, descriptionText }) => {
    return (
        <>
            <TableRows />
            <TableColumns />
        </>
    );
};

Tables.propTypes = {
    titleText: PropTypes.string,
    descriptionText: PropTypes.string,
};

Tables.defaultProps = {
    titleText: "",
    descriptionText: "",
};

export default Tables;

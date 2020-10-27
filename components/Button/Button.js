import PropTypes from "prop-types";

import ButtonStyled from "./styled";

const Button = (props) => <ButtonStyled {...props}>{props.children}</ButtonStyled>;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
};

Button.defaultProps = {
    background: "",
};

export default Button;

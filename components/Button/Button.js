import PropTypes from "prop-types";

import ButtonStyled from "./styled";

const Button = ({ background, children }) => (
    <ButtonStyled background={background}>{children}</ButtonStyled>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
};

Button.defaultProps = {
    background: "",
};

export default Button;

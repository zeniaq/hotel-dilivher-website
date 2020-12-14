/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";

import ButtonStyled from "./styled";

const Button = ({ typeButton }) => (
    <ButtonStyled typeButton={typeButton}>
        {typeButton === "confirm" ? "✔" : typeButton === "cancel" ? "✘" : null}
    </ButtonStyled>
);

Button.propTypes = {
    typeButton: PropTypes.string,
};

Button.defaultProps = {
    typeButton: "",
};

export default Button;

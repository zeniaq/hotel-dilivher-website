/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Container, Div, DivText, DivActions, Button } from "./styled";

const Alert = ({ children }) => {
    return (
        <Container id="alert">
            <Div>
                <DivText>
                    <h2>{children}</h2>
                </DivText>
                <DivActions>
                    <Button href="#">Aceptar</Button>
                </DivActions>
            </Div>
        </Container>
    );
};
Alert.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Alert;

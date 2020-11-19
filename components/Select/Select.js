import PropTypes from "prop-types";
import { Div1, Form, P } from "./styled";
import { FormButton } from "../FormInput";

const Select = ({ mapSelect, textButton }) => {
    return (
        <>
            <Div1>
                <Form action="">
                    {mapSelect}
                    <P>
                        <FormButton textButton={textButton} typeButton="card" />
                    </P>
                </Form>
            </Div1>
        </>
    );
};
Select.propTypes = {
    textButton: PropTypes.string,
    mapSelect: PropTypes.string,
};

Select.defaultProps = {
    textButton: "",
    mapSelect: "",
};
export default Select;

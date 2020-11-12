import PropTypes from "prop-types";
import { Div1, Div2, Form } from "./styled";
import { FormButton } from "../FormInput";

const Select = ({ mapSelect, textButton }) => {
    return (
        <>
            <Div1>
                <Form action="">
                    <Div2>{mapSelect}</Div2>
                    <FormButton textButton={textButton} />
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

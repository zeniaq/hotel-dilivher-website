import PropTypes from "prop-types";
import { Div1, Form, P } from "./styled";
import { FormButton } from "../FormInput";

const Select = ({ mapSelect, textButton, typeSelect }) => {
    return (
        <>
            <Div1 typeSelect={typeSelect}>
                <Form action="" typeSelect={typeSelect}>
                    {mapSelect}
                    {typeSelect !== "tab" ? (
                        <P>
                            <FormButton textButton={textButton} typeButton="card" />
                        </P>
                    ) : null}
                </Form>
            </Div1>
        </>
    );
};
Select.propTypes = {
    textButton: PropTypes.string,
    mapSelect: PropTypes.string,
    typeSelect: PropTypes.string,
};

Select.defaultProps = {
    textButton: "",
    mapSelect: "",
    typeSelect: "",
};
export default Select;

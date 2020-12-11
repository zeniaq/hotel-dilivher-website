/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Div, Input, TextArea, Ul, Li, Button, Label, Select } from "./styled";

const FormInput = ({ titleText, typeInput, nameField, min, max, defaultValue, typeForm }) => {
    return typeInput ? (
        <Div key={titleText}>
            <Label htmlFor={nameField} typeForm={typeForm}>
                {titleText}
                {typeInput === "select" ? (
                    <Select name={nameField} id={nameField} required />
                ) : (
                    <Input
                        type={typeInput}
                        name={nameField}
                        id={nameField}
                        min={min}
                        max={max}
                        defaultValue={defaultValue}
                        required
                    />
                )}
            </Label>
        </Div>
    ) : (
        <Div key={titleText}>
            <Label htmlFor={nameField}>
                {titleText}
                <TextArea name={nameField} id={nameField} rows="6" required />
            </Label>
        </Div>
    );
};

export const FormButton = ({ textButton, typeButton, actionEvent }) => {
    return (
        <Ul>
            {textButton ? (
                <>
                    <Li key="Confirm">
                        <Button
                            align="center"
                            type="submit"
                            typeButton={typeButton}
                            onClick={actionEvent}
                        >
                            {textButton}
                        </Button>
                    </Li>
                </>
            ) : (
                <>
                    <Li key="SendMessage">
                        <Button type="submit">Send Message</Button>
                    </Li>
                    <Li key="Clear">
                        <Input type="reset" value="Clear" />
                    </Li>
                </>
            )}
        </Ul>
    );
};

FormInput.propTypes = {
    titleText: PropTypes.string,
    typeInput: PropTypes.string,
    nameField: PropTypes.string,
    min: PropTypes.string || PropTypes.number,
    max: PropTypes.string || PropTypes.number,
    defaultValue: PropTypes.any,
    typeForm: PropTypes.string,
};

FormInput.defaultProps = {
    titleText: "",
    typeInput: "",
    nameField: "",
    min: "",
    max: "",
    typeForm: "",
};
FormButton.propTypes = {
    textButton: PropTypes.string,
    typeButton: PropTypes.string,
};

FormButton.defaultProps = {
    textButton: "",
    typeButton: "",
};

export default FormInput;

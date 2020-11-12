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

export const FormButton = ({ textButton, typeButton, onClick }) => {
    return (
        <Ul>
            {textButton ? (
                <>
                    <Li key="Confirm">
                        <Button
                            align="center"
                            type="submit"
                            typeButton={typeButton}
                            onClick={onClick}
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
    min: PropTypes.string,
    max: PropTypes.string,
    defaultValue: PropTypes.string,
    typeForm: PropTypes.string,
};

FormInput.defaultProps = {
    titleText: "",
    typeInput: "",
    nameField: "",
    min: "",
    max: "",
    defaultValue: "",
    typeForm: "",
};
FormButton.propTypes = {
    textButton: PropTypes.string,
    typeButton: PropTypes.string,
    onClick: PropTypes.string,
};

FormButton.defaultProps = {
    textButton: "",
    typeButton: "",
    onClick: "",
};

export default FormInput;

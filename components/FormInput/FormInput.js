import PropTypes from "prop-types";
import { Div, Label, Input, TextArea, Ul, Li, Button } from "./styled";

const FormInput = ({ titleText, typeInput, nameField, change }) => {
    return typeInput ? (
        <Div key={titleText}>
            <Label htmlFor={nameField}>
                {titleText}
                <Input
                    type={typeInput}
                    name={nameField}
                    id={nameField}
                    onChange={change}
                    required
                />
            </Label>
        </Div>
    ) : (
        <Div key={titleText}>
            <Label htmlFor={nameField}>
                {titleText}
                <TextArea name={nameField} id={nameField} rows="6" onChange={change} required />
            </Label>
        </Div>
    );
};

export const FormInputButton = () => {
    return (
        <Ul>
            <Li key="SendMessage">
                <Button type="submit">Send Message</Button>
            </Li>
            <Li key="Clear">
                <Input type="reset" value="Clear" />
            </Li>
        </Ul>
    );
};

export const FormSignUpButton = () => {
    return (
        <Ul>
            <Li key="SignUp">
                <Button type="submit">Sign Up</Button>
            </Li>      
        </Ul>
    );
};

export const FormSignInButton = () => {
    return (
        <Ul>
            <Li key="SignIn">
                <Button type="submit">Sign In</Button>
            </Li>   
        </Ul>
    );
};

FormInput.propTypes = {
    titleText: PropTypes.string,
    typeInput: PropTypes.string,
    nameField: PropTypes.string,
    change: PropTypes.string,
};

FormInput.defaultProps = {
    titleText: "",
    typeInput: "",
    nameField: "",
    change: "",
};

export default FormInput;

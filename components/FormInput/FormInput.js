import PropTypes from "prop-types";
import styles from "../../styles/FormInput.module.css";
import { Div, Label, Input, TextArea, Ul, Li, Button } from "./styled";

const FormInput = ({ titleText, typeInput, nameField, change }) => {
    const classInput = `${styles.field} ${styles.half}`;
    return typeInput ? (
        <Div className={classInput} key={titleText}>
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
        <Div className={styles.field} key={titleText}>
            <Label htmlFor={nameField}>
                {titleText}
                <TextArea name={nameField} id={nameField} rows="6" onChange={change} required />
            </Label>
        </Div>
    );
};

export const FormInputButton = () => {
    return (
        <Ul className={styles.actions}>
            <Li key="SendMessage">
                <Button type="submit" className={styles.primary}>
                    Send Message
                </Button>
            </Li>
            <Li key="Clear">
                <Input type="reset" value="Clear" />
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

import PropTypes from "prop-types";
import styles from "../../styles/FormInput.module.css";

const FormInput = ({ titleText, typeInput, nameField, change }) => {
    const classInput = `${styles.field} ${styles.half}`;
    return typeInput ? (
        <div className={classInput} key={titleText}>
            <label htmlFor={nameField}>
                {titleText}
                <input
                    type={typeInput}
                    name={nameField}
                    id={nameField}
                    onChange={change}
                    required
                />
            </label>
        </div>
    ) : (
        <div className={styles.field} key={titleText}>
            <label htmlFor={nameField}>
                {titleText}
                <textarea name={nameField} id={nameField} rows="6" onChange={change} required />
            </label>
        </div>
    );
};

export const FormInputButton = () => {
    return (
        <ul className={styles.actions}>
            <li key="SendMessage">
                <button type="submit" className={styles.primary}>
                    Send Message
                </button>
            </li>
            <li key="Clear">
                <input type="reset" value="Clear" />
            </li>
        </ul>
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

import PropTypes from "prop-types";
import styles from "../../styles/Home.module.css";

const FormInput = ({ titleText, typeInput, nameField }) => {
    const classInput = `${styles.field} ${styles.half}`;
    return typeInput ? (
        <div className={classInput} key={titleText}>
            <label htmlFor={nameField}>
                {titleText}
                <input type={typeInput} name={nameField} id={nameField} />
            </label>
        </div>
    ) : (
        <div className={styles.field} key={titleText}>
            <label htmlFor={nameField}>
                {titleText}
                <textarea name={nameField} id={nameField} rows="6" />
            </label>
        </div>
    );
};

export const FormInputButton = () => {
    return (
        <ul className={styles.actions}>
            <li key="SendMessage">
                <input type="submit" value="Send Message" className={styles.primary} />
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
};

FormInput.defaultProps = {
    titleText: "",
    typeInput: "",
    nameField: "",
};

export default FormInput;

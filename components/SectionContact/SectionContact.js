import styles from "../../styles/SectionContact.module.css";
import dataContact from "../Icon/icons";
import Icon from "../Icon";
import forms from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";

const SectionContact = () => {
    const data = dataContact.map((icons) => (
        <Icon
            titleText={icons.titleText}
            descriptionText1={icons.descriptionText1}
            descriptionText2={icons.descriptionText2}
            linkRef={icons.linkRef}
            iconSrc={icons.iconSrc}
            key={icons.titleText}
        />
    ));
    const data2 = forms.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            key={form.titleText}
        />
    ));
    return (
        <section className={styles.contact} key="SectionContact">
            <div className={styles.inner}>
                <section>
                    <form name="contact" method="post" netlify>
                        <div className={styles.fields}>{data2}</div>
                        <FormButton />
                    </form>
                </section>
                <section className={styles.split}>{data}</section>
            </div>
        </section>
    );
};
export default SectionContact;

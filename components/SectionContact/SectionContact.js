import styles from "../../styles/SectionContact.module.css";
import dataContact from "../Icon/icons";
import Icon from "../Icon";
import forms from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";
import { Section1, Section2, Section3, Div1, Div2, Form, Input } from "./styled";

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
        <Section1 className={styles.contact} key="SectionContact">
            <Div1 className={styles.inner}>
                <Section2>
                    <Form name="contact" action="/success" method="POST" data-netlify="true">
                        <Input type="hidden" name="form-name" value="contact" />
                        <Div2 className={styles.fields}>{data2}</Div2>
                        <FormButton />
                    </Form>
                </Section2>
                <Section3 className={styles.split}>{data}</Section3>
            </Div1>
        </Section1>
    );
};
export default SectionContact;

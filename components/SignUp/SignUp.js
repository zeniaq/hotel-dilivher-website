import { SignUpForms } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";
import { FormSignUpButton } from "../FormInput/FormInput";
import { Section, Div, Div2, Form } from "./styled";

const SignUp = () => {
    const signup1 = SignUpForms.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            key={form.titleText}
        />
    ));

    return (
        <Section key="SectionUp">
            <Div>
                <Form name="contact" action="/success" method="POST" data-netlify="true">
                    <Div2>{signup1}</Div2>

                    <FormSignUpButton />
                </Form>
            </Div>
        </Section>
    );
};

export default SignUp;
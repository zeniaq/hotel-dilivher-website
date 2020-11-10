import { SignInForms } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";
import { FormSignInButton } from "../FormInput/FormInput";
import { Section, Div, Div2, Form } from "./styled";

const SignIn = () => {
    const signin1 = SignInForms.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            key={form.titleText}
        />
    ));

    return (
        <Section key="SectionIn">
            <Div>
                <Form name="contact" action="/success" method="POST" data-netlify="true">
                    <Div2>{signin1}</Div2>
                    <FormSignInButton />
                </Form>
            </Div>
        </Section>
    );
};

export default SignIn;
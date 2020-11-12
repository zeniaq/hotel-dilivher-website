import { SignUpForms } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";

import { Section, Div, Div2, Form, Anchor, Img } from "./styled";

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
                <Anchor>
                    <Img src="icons/user2.svg" alt="Profile icon" />
                </Anchor>
                <Form name="contact" action="/success" method="POST" data-netlify="true">
                    <Div2>{signup1}</Div2>
                    <Anchor>
                        <FormButton formType="2" />
                    </Anchor>
                </Form>
            </Div>
        </Section>
    );
};

export default SignUp;

import { SignInForms } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";

import { Section, Div, Div2, Form, Img, Anchor } from "./styled";

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
                <Anchor>
                    <Img src="icons/user2.svg" alt="Profile icon" />
                </Anchor>
                <Form name="contact" action="" method="POST">
                    <Div2>{signin1}</Div2>
                    <Anchor>
                        <FormButton textButton="Confirmar" />
                    </Anchor>
                </Form>
            </Div>
        </Section>
    );
};

export default SignIn;

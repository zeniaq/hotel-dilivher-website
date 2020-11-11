import { RegisterUserForms } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";
import { FormConfirmButton } from "../FormInput/FormInput";
import { Section, Div, Div2, Form, Img, Anchor1, Anchor2 } from "./styled";

const RegisterUser = () => {
    const register1 = RegisterUserForms.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            key={form.titleText}
        />
    ));

    return (
        <Section key="SectionRegister">
            <Div>
                <Anchor1>
                    <Img src="icons/user2.svg" alt="Profile icon" />
                </Anchor1>
                <Form name="contact" action="/success" method="POST" data-netlify="true">
                    <Div2>{register1}</Div2>
                    <Anchor2>
                        <FormConfirmButton />
                    </Anchor2>
                </Form>
            </Div>
        </Section>
    );
};

export default RegisterUser;
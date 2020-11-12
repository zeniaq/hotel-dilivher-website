import { RegisterUserForms } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";
import { Section, Div, Div2, Form, Img, Anchor } from "./styled";


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
                <Anchor>
                    <Img src="icons/user2.svg" alt="Profile icon" />
                </Anchor>
                <Form name="contact" action="/success" method="POST" data-netlify="true">
                    <Div2>{register1}</Div2>
            
                    <Anchor>
                        <FormButton textButton="Confirmar" />
                    </Anchor>

                </Form>
            </Div>
        </Section>
    );
};

export default RegisterUser;

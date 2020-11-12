import { RegisterUserForms } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";
<<<<<<< HEAD
import { Section, Div, Div2, Form, Img, Anchor } from "./styled";
=======
import { Section, Div, Div2, Form, Img, Anchor1, Anchor2 } from "./styled";
>>>>>>> 66fb7cab6379666a6b51e0f722fbeb477244f0bf

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
<<<<<<< HEAD
                </Anchor>
                <Form name="contact" action="/success" method="POST" data-netlify="true">
                    <Div2>{register1}</Div2>
                    <Anchor>
                        <FormButton formType="2" />
                    </Anchor>
=======
                </Anchor1>
                <Form name="contact" action="" method="POST">
                    <Div2>{register1}</Div2>
                    <Anchor2>
                        <FormButton textButton="Confirmar" />
                    </Anchor2>
>>>>>>> 66fb7cab6379666a6b51e0f722fbeb477244f0bf
                </Form>
            </Div>
        </Section>
    );
};

export default RegisterUser;

import PropTypes, { node } from "prop-types";
import { FormButton } from "../FormInput";

import { Section, Div, Div2, Form, P, Img } from "./styled";

const SectionForm = ({ children, linkRef }) => {
    return (
        <Section key="SectionUp">
            <Div>
                <P>
                    <Img src="icons/user2.svg" alt="Profile icon" />
                </P>
                <Form name="contact" action={linkRef} method="POST">
                    <Div2>{children}</Div2>
                    <P>
                        <FormButton textButton="Confirmar" />
                    </P>
                </Form>
            </Div>
        </Section>
    );
};

SectionForm.propTypes = {
    children: node.isRequired,
    linkRef: PropTypes.string,
};

SectionForm.defaultProps = {
    linkRef: "",
};

export default SectionForm;

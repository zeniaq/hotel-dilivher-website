import PropTypes, { node } from "prop-types";
import { FormButton } from "../FormInput";

import { Section, Div, Div2, Form, Anchor, Img } from "./styled";

const SectionForm = ({ children, linkRef }) => {
    return (
        <Section key="SectionUp">
            <Div>
                <Anchor>
                    <Img src="icons/user2.svg" alt="Profile icon" />
                </Anchor>
                <Form name="contact" action={linkRef} method="POST">
                    <Div2>{children}</Div2>
                    <Anchor>
                        <FormButton textButton="Confirmar" />
                    </Anchor>
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

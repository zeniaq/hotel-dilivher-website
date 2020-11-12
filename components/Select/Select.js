import { Div1, Div2, Form } from "./styled";
import FormInput, { FormButton } from "../FormInput";
import { dataSelect } from "../FormInput/forms";

const Select = () => {
    const data = dataSelect.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            typeForm={form.typeForm}
            key={form.titleText}
            defaultValue={form.defaultValue}
            min={form.min}
            max={form.max}
        />
    ));
    return (
        <>
            <Div1>
                <Form action="">
                    <Div2>{data}</Div2>
                    <FormButton formType="3" />
                </Form>
            </Div1>
        </>
    );
};
export default Select;

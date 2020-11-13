import PrincipalLayout from "../components/PrincipalLayout";
import { SignUpForms } from "../components/FormInput/forms";
import FormInput from "../components/FormInput";
import SectionForm from "../components/SectionForm";

export default function Home() {
    const signup = SignUpForms.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            key={form.titleText}
        />
    ));
    return (
        <PrincipalLayout title="Hotel Dilivher :: Sign Up">
            <SectionForm linkRef="/">{signup}</SectionForm>
        </PrincipalLayout>
    );
}

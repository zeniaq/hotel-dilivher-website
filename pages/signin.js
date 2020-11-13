import PrincipalLayout from "../components/PrincipalLayout";
import { SignInForms } from "../components/FormInput/forms";
import FormInput from "../components/FormInput";
import SectionForm from "../components/SectionForm";

export default function Home() {
    const signin = SignInForms.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            key={form.titleText}
        />
    ));
    return (
        <PrincipalLayout title="Hotel Dilivher :: Sign In">
            <SectionForm linkRef="/">{signin}</SectionForm>
        </PrincipalLayout>
    );
}

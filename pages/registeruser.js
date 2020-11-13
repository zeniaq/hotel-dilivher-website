import PrincipalLayout from "../components/PrincipalLayout";
import { RegisterUserForms } from "../components/FormInput/forms";
import FormInput from "../components/FormInput";
import SectionForm from "../components/SectionForm";

export default function Home() {
    const register = RegisterUserForms.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            key={form.titleText}
        />
    ));
    return (
        <PrincipalLayout title="Hotel Dilivher :: Register User">
            <SectionForm linkRef="/">{register}</SectionForm>
        </PrincipalLayout>
    );
}

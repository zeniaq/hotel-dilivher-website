import IndexPage from "../components/IndexPage";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout contact="true" title="Hotel Dilivher :: Home">
            <IndexPage />
        </PrincipalLayout>
    );
}

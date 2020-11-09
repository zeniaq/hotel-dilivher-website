import LandingPage from "../components/LandingPage";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout contact="true" title="Hotel Dilivher :: Landing Page">
            <LandingPage />
        </PrincipalLayout>
    );
}

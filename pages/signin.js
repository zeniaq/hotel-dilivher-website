import SignIn from "../components/SignIn";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Sign In" typeMenu="Employee">
            <SignIn />
        </PrincipalLayout>
    );
}
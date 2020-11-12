import SignUp from "../components/SignUp";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Sign Up" typeMenu="Employee">
            <SignUp />
        </PrincipalLayout>
    );
}

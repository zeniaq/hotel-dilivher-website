import RegisterUser from "../components/RegisterUser";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Register User" typeMenu="Employee">
            <RegisterUser />
        </PrincipalLayout>
    );
}
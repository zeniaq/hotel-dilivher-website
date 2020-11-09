import ErrorPage from "../components/ErrorPage";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Pagina no encontrada">
            <ErrorPage />
        </PrincipalLayout>
    );
}

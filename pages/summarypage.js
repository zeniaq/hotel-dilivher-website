import ReservationSummaryPage from "../components/ReservationSummaryPage";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Reservation Summary" typeMenu="Employee">
            <ReservationSummaryPage  />
        </PrincipalLayout>
    );
}
import AvailableRooms from "../components/AvailableRooms";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Habitaciones Disponibles" typeMenu="Employee">
            <AvailableRooms />
        </PrincipalLayout>
    );
}
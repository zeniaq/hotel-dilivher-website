import RoomLabels from "../components/RoomLabels";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Habitaciones Disponibles" typeMenu="Employee">
            <RoomLabels />
        </PrincipalLayout>
    );
}
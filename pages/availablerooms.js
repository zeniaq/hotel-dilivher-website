import SectionRooms from "../components/SectionRooms";
import PrincipalLayout from "../components/PrincipalLayout";

export default function Home() {
    return (
        <PrincipalLayout title="Hotel Dilivher :: Habitaciones Disponibles" typeMenu="Employee">
            <SectionRooms />
        </PrincipalLayout>
    );
}